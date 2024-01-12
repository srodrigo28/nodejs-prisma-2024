import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient()

export class UsuarioController{

    async handle(req: Request, res: Response){
        const { nome, email, senha} = req.body
        const user = await prismaClient.usuario.create({
            data: { nome, email, senha},
        })
        return res.json(user);
    }
}