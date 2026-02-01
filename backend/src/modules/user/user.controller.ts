import { Request, Response } from "express"
import * as userService from "./user.service"

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await userService.getUsers()
        return res.json(users)
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }
}

export async function createUser(req: Request, res: Response) {
    try { 
        const { nome, email } = req.body

        if (!nome || !email) {
            return res.status(400).json({ message: "Nome e email são obrigatórios" })
        }

        const result = await userService.addUser(nome, email)

        return res.status(201).json(result)
    } catch (error: any) {
        if (error.code === "23505") {
            return res.status(500).json({ message: "Email já cadastrado." })
        }

        return res.status(400).json({ message: error.message })
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" })
        }

        const result = await userService.removeUser(id)

        if (!result) {
            return res.status(404).json({ message: "Usuário não encontrado" })
        }

        return res.json({ message: "Usuário deletado com sucesso!", user: result })
    } catch (error: any) {
        return res.status(400).json({ message: error.message })
    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const { nome, email } = req.body

        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" })
        }

        if (!nome && !email) {
            return res.status(400).json({ message: "Informe pelo menos um campo para atualizar" })
        }

        const result = await userService.editUser(id, nome, email)

        if (!result) {
            return res.status(404).json({ message: "Usuário não encontrado" })
        }

        return res.json({ message: "Usuário atualizado com sucesso!", user: result })
    } catch (error: any) {
        return res.status(400).json({ message: error.message })
    }
}
