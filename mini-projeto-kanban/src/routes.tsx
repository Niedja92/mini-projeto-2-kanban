import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login";
import BaseLayout from "./components/base-layout/Header";
import Kanban from "./pages/kanban";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Kanban />} />
                    <Route path="/logout" element={<h1>SAIR</h1>} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<h1>REGISTER</h1>} />
            </Routes>
        </BrowserRouter>
    )
}