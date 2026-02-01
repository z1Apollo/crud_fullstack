import { useEffect, useState } from "react";
import type { User } from "../types/user";
import * as usersApi from "../services/users.api"
import UserForm from "../components/userForm/UserForm";
import UserList from "../components/userList/UserList";
import { Header } from "../Styles/GlobalStyle";

export default function UserPage() {
    const [users, setUsers] = useState<User[]>([])

    async function loadUsers() {
        const data = await usersApi.getUsers()
        setUsers(data)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <>  
            <Header>
                <h1>Cadastro de Usuarios</h1>
                 <p>Projeto criado com intuito de aprimorar as habilidades dentro do Fullstack usando NodeJS, React, Typescript, Axios & Emotion.</p>
            </Header>
            
            <UserForm onCreated={loadUsers} />
            <UserList users={users} onChange={loadUsers}/>
        </>
    )
}