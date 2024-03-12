import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false, maxlength: 60 },
    salt: {type: String, select: false },
    sessionToken: {type: String, select: false },
},
);

export const UserModel = mongoose.model('User', UserSchema);

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({email});
export const getUserByUsername = (username: string) => UserModel.findOne({username});
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({'authentication.sessionToken': sessionToken});
export const getUserById = (id: string) => UserModel.findById(id);
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({_id: id });
export const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);

export const createUser = async (values: Record<string, any>) => {
    try {
        const user = new UserModel(values);
        await user.save();
        return user.toObject();
    } catch (error) {
        throw new Error('Could not create user');
    }
}