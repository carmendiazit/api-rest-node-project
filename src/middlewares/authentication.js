import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET;

export const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No se encontró el header Authorization' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Formato del header Authorization inválido' });
  }

  const token = parts[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secret_key, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
};
