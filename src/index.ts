import express, { Request, Response } from "express";
import { User } from "./user";

const app = express();
app.use(express.json());


const users: User[] = [];


app.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body;

 
  if (!name || !email) {
    return res.status(400).json({
      error: "Nome e email são obrigatórios"
    });
  }

  
  if (!email.includes("@")) {
    return res.status(400).json({
      error: "Email inválido"
    });
  }

  
  const newUser: User = {
    name,
    email
  };

  
  users.push(newUser);

  return res.status(201).json(newUser);
});


app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
