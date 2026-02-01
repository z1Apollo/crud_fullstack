import app from "./app"

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`deu bom ai. server rodando na ${port}`)
})

// testando localmente antes de upar