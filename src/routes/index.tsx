
import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { CardInfo, Home2 } from "../shared/components"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<CardInfo />} />
            <Route path="/home2" element={<Home2/>}/>
            <Route path="*" element={<Navigate to='/home'/>}/>
        </Routes>
    )
}