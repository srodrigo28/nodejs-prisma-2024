import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export class CategoriaController{

    async handle(req: Request, res: Response){
        const { nome, descricao } = req.body;
        const categoria = await prismaClient.categoria.create({
            data: { nome, descricao }
        })
        return res.json(categoria);
    }
}