import React, { useRef, useState } from "react"
import * as usersApi from "../../services/users.api"
import { Btn, FormCD, InputsForm } from "./style"

interface Props {
    onCreated: () => void
}

export default function UserForm({ onCreated }: Props) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!nome || !email) return alert("preencha tudo")

        try {
            await usersApi.createUsers({ nome, email })

            setNome("")
            setEmail("")
            onCreated()
        } catch (error: any) {
            alert(error.response?.data?.message || "Erro ao cadastrar usuario")
        }
       
    }

    const emailRef = useRef<HTMLInputElement>(null)

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            if (!email) {
                e.preventDefault()
                emailRef.current?.focus()
            }
        }
    }

    return(
        <>
            <FormCD onSubmit={handleSubmit}>
                <InputsForm
                    placeholder="digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <InputsForm
                    ref={emailRef}
                    placeholder="digite seu email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Btn>Criar</Btn>
            </FormCD>
        </>
    )
}