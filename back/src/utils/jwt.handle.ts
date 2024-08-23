import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "Token123";
const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyTokken =  (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
};

export { generateToken, verifyTokken };
