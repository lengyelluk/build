import mongoose, { Schema } from 'mongoose';
import emailValidator from 'email-validator';
import bcrypt from 'bcrypt';

//number of SALTING ROUNDS
const SALT_ROUNDS = 12;

//validate user schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    index: {unique: true},
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    index: {unique: true},
    validate: {
      validator: emailValidator.validate,
      message: props => `${props.value} is not a valid email address`,
    },
  },
  password: {
    type: String,
    unique: true,
    trim: true,
    index: {unique: true},
    minlength: 8,
  }
}, {
  timestamps: true,
});

//salting and hashing password if it has not been done yet
UserSchema.pre('save', async function preSave(next) {
  const user = this;
  if(!user.isModified('password')) 
    return next();
  try {
    const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
    user.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.comparePassword = async function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
}

const User = mongoose.model('User', UserSchema);

export default User;