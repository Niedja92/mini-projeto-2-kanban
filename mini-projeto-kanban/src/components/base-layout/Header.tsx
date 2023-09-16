import { Outlet } from "react-router-dom";

export default function BaseLayout() {
    return (
        <div>
            <header>HEADER</header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
