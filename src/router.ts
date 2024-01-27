import { Router } from "express";
import { UsuarioController } from "./controllers/UserController";
import { CategoriaController } from "./controllers/CategoriaController";
import { CreateTransactionController, FindAllTransactionController, UpdateTransactionController, DeleteTransactionController } from "./controllers/TransactionController";

const router = Router();

const createUsuario = new UsuarioController();
router.post("/user", createUsuario.handle)

const createCategoria = new CategoriaController();
router.post("/categoria", createCategoria.handle)

// TRANSACTION
const createTransaction = new CreateTransactionController();
router.post("/transaction", createTransaction.handle)

const listTransaction = new FindAllTransactionController();
router.get("/transaction", listTransaction.handle)

const updateTransaction = new UpdateTransactionController();
router.put("/transaction/:id", updateTransaction.handle)

const deleteTransaction = new DeleteTransactionController();
router.delete("/transaction/:id", deleteTransaction.handle)

export { router }