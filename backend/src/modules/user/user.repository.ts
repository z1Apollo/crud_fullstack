import { db } from "../../config/database"

export async function findAllUsers() {
    const result = await db.query("select * from users")
    return result.rows
}

export async function createUser(nome: string, email: string) {
    const result = await db.query(
        "insert into users (nome, email) values ($1, $2) returning *",
        [nome, email]
    )

    return result.rows[0]
}

export async function deleteUser(id: number) {
    const result = await db.query(
        "delete from users where id = $1 returning *",
        [id]
    )

    return result.rows[0]
}

export async function updateUser(id: number, nome?: string, email?: string) {
    const fields: string[] = []
    const values: any[] = []

    if (nome) {
        fields.push(`nome = $${values.length + 1}`)
        values.push(nome)
    }

    if (email) {
        fields.push(`email = $${values.length + 1}`)
        values.push(email)
    }

    values.push(id)

    const sql = `
        update users 
        set ${fields.join(", ")}
        where id = $${values.length}
        returning *
    `

    const result = await db.query(sql, values)

    return result.rows[0]
}
