import { Outlet } from "react-router-dom";
import { HeaderStyle } from "../../assets/global-style"

export default function BaseLayout() {
    return (
        <div>
            <main>
                <HeaderStyle>
                    <h1>Arnia Trello</h1>
                    <div>
                        <h3>Olá, usuário</h3>
                        <p>Sair</p>

                    </div>

                </HeaderStyle>
                <Outlet />
            </main>
        </div>
    )
}
