import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/entrar" element={<Login />} />
            <Route path="/pagina-inicial" element={<Dashboard />} />
        
            <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
        
        </Routes>
    )
}