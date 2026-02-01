import { useState } from "react";
import type { User } from "../../types/user";
import * as usersApi from "../../services/users.api"
import { BtnCancelar, BtnEdit, BtnRemove, BtnSalvar, EditMobile, SectionButtons, UsersGrid } from "./style";
import { InputsForm } from "../userForm/style";

interface Props {
    users: User[]
    onChange: () => void
}

export default function UserList({ users, onChange }: Props) {
    const [editId, setEditId] = useState<number | null>(null)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    async function handleDelete(id: number) {
        await usersApi.deleteUsers(id)
        onChange()
    }

    async function handleEdit(user: User) {
        setEditId(user.id)
        setNome(user.nome)
        setEmail(user.email)
    }

    async function handleUpdate(id: number) {
        const data: any = {}

        if (nome) data.nome = nome
        if (email) data.email = email

        await usersApi.updateUsers(id, data)

        setEditId(null)
        onChange()
    }

    return (
        <>
            <UsersGrid>
                {users.map((user) => (
                    <li key={user.id}>
                        {editId === user.id ? (
                            <>
                                <EditMobile>
                                    <InputsForm value={nome} onChange={(e) => setNome(e.target.value)} />
                                    <InputsForm value={email} onChange={(e) => setEmail(e.target.value)} />

                                    <div>
                                        <BtnSalvar onClick={() => handleUpdate(user.id)}>Salvar</BtnSalvar>
                                        <BtnCancelar onClick={() => setEditId(null)}>Cancelar</BtnCancelar> 
                                    </div>
                                </EditMobile>
                            </>
                        ):(
                            <> 
                                <section>Nome: <strong>{user.nome}</strong> <br /> Email: <strong>{user.email}</strong> 
                                    <SectionButtons> 
                                        <BtnEdit onClick={() => handleEdit(user)}>Editar</BtnEdit> 
                                        <BtnRemove onClick={() => handleDelete(user.id)}>Excluir</BtnRemove> 
                                    </SectionButtons>
                                </section>  
                            </>
                        )}
                    </li>
                ))}
            </UsersGrid>
        </>
    )
}