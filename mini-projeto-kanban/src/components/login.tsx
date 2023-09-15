function Login() {
    return (
        <div>
            <form className="login">
                <h1>Arnia Trello</h1>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="input" name="email" />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" />
                </div>

                <div>
                    <button type="submit">Entrar</button>
                </div>

                <div>
                    <a>Cadastrar-se</a>
                </div>

            </form>
        </div>

    )
}

export default Login

