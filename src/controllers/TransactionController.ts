import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const pCliente = new PrismaClient();

export class CreateTransactionController{
    async handle(req: Request, res: Response) {
        
        const { title, type, category, amount  } = req.body;
        
        const transactions = await pCliente.transactions.create({
            data: {
                title,
                type, 
                category,
                amount
            }
        })

        return res.json( transactions )
    }
}

export class FindAllTransactionController{
    async handle(req: Request, res: Response) {
        const transaction = await pCliente.transactions.findMany()
        return res.json(transaction)
    }
}

export class UpdateTransactionController{
    async handle(req: Request, res: Response) {
        const { title, type, category, amount  } = req.body;

        const { id } = req.params;
        
        const transaction = await pCliente.transactions.update({
            where: {
                id: Number(id)
            },
            data: {
                title,
                type,
                category,
                amount
            }
        })
        return res.json({transaction})
    }
}

export class DeleteTransactionController{
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        
        const transaction = await pCliente.transactions.delete({
            where: {
                id: Number(id)
            }
        })
        return res.json("Transação:: Deletada com sucesso")
    }
}