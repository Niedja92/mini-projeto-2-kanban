import { ChangeEvent, FormEvent, useState } from "react"
import { postLogin } from "../services/user-service"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { FormLogin, ContainerLogin, LabelInput, ButtonForm, LinkRegister } from "../assets/global-style"

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
        <ContainerLogin>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            <FormLogin onSubmit={handleSubmit}>
                <h1>Arnia Trello</h1>
                <LabelInput>
                    <label htmlFor="email">E-mail</label><br />
                    <input type="text" name="email" required onChange={handleChange} />
                </LabelInput>

                <LabelInput>
                    <label htmlFor="password">Senha</label><br />
                    <input type="password" name="password" required onChange={handleChange} />
                </LabelInput>

                <div>
                    <ButtonForm type="submit">ENTRAR</ButtonForm>
                </div>

                <Link to="/register">
                    <LinkRegister>Cadastrar-se</LinkRegister>
                </Link>

            </FormLogin>
        </ContainerLogin>
    )
}