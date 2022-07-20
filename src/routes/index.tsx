
import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { useAppThemeContext } from "../shared/contexts"


export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    return (
        <Routes>
            <Route path="/dash" element={<Button variant='contained' color='primary' style={{position:"absolute", bottom: 10, right: 0}} onClick={toggleTheme}>Mudar thema</Button>}/>
            <Route path="/login" element={<Button variant='contained' color='primary' style={{position:"absolute", bottom: 10, right: 0}} onClick={toggleTheme}>Mudar thema</Button>}/>
            <Route path="*" element={<Navigate to='/dash'/>}/>
        </Routes>
    )
}