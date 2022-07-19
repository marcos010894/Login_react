
import { Routes, Route, Navigate } from "react-router-dom"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<p>Pagina de login.</p>}/>
            <Route path="/dash" element={<p>Dashboard</p>}/>
            <Route path="*" element={<Navigate to='/login'/>}/>
        </Routes>
    )
}