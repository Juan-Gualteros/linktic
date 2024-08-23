import { NextFunction, Request, Response } from "express";
import { verifyTokken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(" ").pop();
    const isUser = verifyTokken(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send("NO TIENES UNA SESION VALIDA");
    } else {
      req.user = isUser
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESION NO VALIDA");
  }
};

export { checkJwt };
