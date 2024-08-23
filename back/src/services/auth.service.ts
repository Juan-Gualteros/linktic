
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name, phone }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "EXISTE";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
    phone,
  });
  return registerNewUser;
};
const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "No EXISTE";

  const passwordHash = checkIs.password
  const isCorrect = await verify(password, passwordHash)
  if(!isCorrect) return "Contraseña incorrecta"
  const token = generateToken(checkIs.email)
  const data = {
    token,
    user: checkIs
  }
  return data
};

export { registerNewUser, loginUser };
