import express, { Request, Response } from "express";
import { User } from "./user";

const app = express();
app.use(express.json());

// Persistência em memória
const users: User[] = [];

// Rota POST /users
app.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body;

  // Validação dos campos obrigatórios
  if (!name || !email) {
    return res.status(400).json({
      error: "Nome e email são obrigatórios"
    });
  }

  // Validação simples de email
  if (!email.includes("@")) {
    return res.status(400).json({
      error: "Email inválido"
    });
  }

  // Criação do usuário tipado
  const newUser: User = {
    name,
    email
  };

  // Armazena em memória
  users.push(newUser);

  return res.status(201).json(newUser);
});

// Inicialização do servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
