import { ChangeEvent, FormEvent, useState } from "react"
import { postLogin } from "../services/user-service"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


type ValuesProps = {
    email: string
    password: string
}

export default function Login() {
    const navigate = useNavigate()
    const [values, setValues] = useState<ValuesProps>({
        email: '',
        password: '',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const result = await postLogin(values)
            localStorage.setItem('TOKEN', result.token)
            navigate('/', { replace: true })
        } catch (e) {
            if (e instanceof Error) {
                toast(e.message)
            }
        }
    }

    return (
        <>
            <h1>Login</h1>
            <pre>{JSON.stringify(values, null, 2)}</pre>

            <form onSubmit={handleSubmit}>
                <h1>Arnia Trello</h1>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" onChange={handleChange} />
                </div>

                <div>
                    <button type="submit">Entrar</button>
                </div>

                <div>
                    <a>Cadastrar-se</a>
                </div>

            </form>
        </>
    )
}