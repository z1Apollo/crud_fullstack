import * as userRepository from "./user.repository"

export async function getUsers() {
    return userRepository.findAllUsers()
}

export async function addUser(nome: string, email: string) {
    if (!nome || !email) {
        throw new Error("Nome e email são obrigatórios.")
    }

    return userRepository.createUser(nome, email)
}

export async function removeUser(id: number) {
    if (!id || isNaN(id)) {
        throw new Error("ID inválido.")
    }

    const result = await userRepository.deleteUser(id)

    if (!result) {
        throw new Error("Usuário não encontrado.")
    }

    return result
}

export async function editUser(id: number, nome?: string, email?: string) {
    if (!id || isNaN(id)) {
        throw new Error("ID inválido.")
    }

    if (!nome && !email) {
        throw new Error("Envie pelo menos um campo para atualizar.")
    }

    const result = await userRepository.updateUser(id, nome, email)

    if (!result) {
        throw new Error("Usuário não encontrado.")
    }

    return result
}
