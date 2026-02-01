import type { User } from "../types/user";
import { api } from "./api";

export async function getUsers() {
    const res = await api.get<User[]>("/users")
    return res.data
}

export async function createUsers(data: {nome: string, email: string}) {
    const res = await api.post(`/users`, data)
    return res.data
}
 
export async function updateUsers(id: number, data: {nome?: string, email?: string}) {
    const res = await api.patch(`/users/${id}`, data)
    return res.data
}

export async function deleteUsers(id: number) {
    const res = await api.delete(`/users/${id}`)
    return res.data
}