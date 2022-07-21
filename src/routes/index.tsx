
import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/DartSystem"/>
            <Route path="*" element={<Navigate to='/DartSystem'/>}/>
        </Routes>
    )
}