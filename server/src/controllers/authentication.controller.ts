import express from 'express';
import bcrypt from 'bcrypt';
import { getUserByEmail, createUser, getUserByUsername } from '../schemas/users';
import validator from "email-validator";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
      return res.sendStatus(400);
    }

    let user;

    if (usernameOrEmail.includes('@')) {
      user = await getUserByEmail(usernameOrEmail).select('+password');
    } else {
      // If not an email, assume it's a username
      user = await getUserByUsername(usernameOrEmail).select('+password');
    }

    if (!user) {
      return res.sendStatus(400).send("Email does not exist");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.sendStatus(403);
    }

    // Generate session token and update user sessionToken
    const saltRounds = 10;
    const sessionToken = await bcrypt.hash(user._id.toString(), saltRounds);
    user.sessionToken = sessionToken;
    await user.save();

    res.cookie('GODSWILL-AUTH', sessionToken, { domain: 'localhost', path: '/', httpOnly: true, sameSite: 'none', });
    res.set('Set-Cookie', 'test-cookie=test-value; Domain=localhost; Path=/; HttpOnly; SameSite=None');

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const register = async (req: express.Request, res: express.Response) => {
  try {
      const { firstName, lastName, email, password, username } = req.body;

      if (!firstName) return res.status(400).send("First Name is required");
    if (!lastName) return res.status(400).send("Last Name is required");
    if (!email) return res.status(400).send("Email is required");
    if (!validator.validate(email)) {
      return res.status(400).send("Please enter a valid email address");
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Please provide a valid password (minimum 6 characters)");
    }
    
      if (!email || !password || !username) {
          return res.sendStatus(400);
      }

      const existingUser = await getUserByEmail(email);
    
      if (existingUser) {
          return res.sendStatus(400);
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      const user = await createUser({
          firstName,
          lastName,
          email,
          username,
          password: hashedPassword,
      });

      return res.status(200).json(user).end();
  } catch (error) {
      console.log(error);
      return res.sendStatus(400);
  }
};