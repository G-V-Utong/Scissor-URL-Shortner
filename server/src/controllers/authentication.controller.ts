import express from 'express';

import { getUserByEmail, createUser, getUserByUsername } from '../schemas/users';
import { authentication, random } from '../helpers/index';
import { string } from 'yup';

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
      return res.sendStatus(400);
    }

    let user;

    if (usernameOrEmail.includes('@')) {
      user = await getUserByEmail(usernameOrEmail).select('+authentication.salt +authentication.password');
    } else {
      // If not an email, assume it's a username
      user = await getUserByUsername(usernameOrEmail).select('+authentication.salt +authentication.password');
    }

    if (!user) {
      return res.sendStatus(400);
    }

    if (!user.authentication || !user.authentication.salt || !user.authentication.password) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.authentication.salt, password);
    
    if (user.authentication.password != expectedHash) {
      return res.sendStatus(403);
    }

    const salt = random();
    user.authentication.sessionToken = authentication(salt, user._id.toString());

    await user.save();

    res.cookie('GODSWILL-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { firstName, lastName, email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);
  
    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      firstName,
      lastName,
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}