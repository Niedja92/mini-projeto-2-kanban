import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>AQUI VAI MEU BASE LAYOUT</h1>}>
                    <Route index element={<h1>KANBAN</h1>} />
                    <Route path="/logout" element={<h1>SAIR</h1>} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<h1>REGISTER</h1>} />
            </Routes>
        </BrowserRouter>
    )
}