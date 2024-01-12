import { Router } from "express";
import { UsuarioController } from "./controllers/UserController";
import { CategoriaController } from "./controllers/CategoriaController";

const router = Router();

const createUsuario = new UsuarioController();
router.post("/user", createUsuario.handle)

const createCategoria = new CategoriaController();
router.post("/categoria", createCategoria.handle)

export { router }