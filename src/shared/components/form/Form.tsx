import { Button, Icon, List, ListItemButton, ListItemIcon, ListItemText, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import image from "../../../assets/imgcapa.jpg"
import logo from "../../../assets/logo.png"
import { useAppThemeContext, useAuthContext } from "../../contexts"

interface IEventProviderProps {
    children: React.ReactNode
}


export function FormLogin ({children}: IEventProviderProps) {
    const theme = useTheme();
    const smDawn = useMediaQuery(theme.breakpoints.down('sm'));

    const {isAutentication, login} =  useAuthContext()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const {toggleTheme} = useAppThemeContext()

    if(isAutentication) return (
            <>{children}</> 
    );
    

    return(        <>
        <Box display='flex' overflow="hidden">

            <Box width="70%" height="100vh" display={smDawn === true ? 'none' : 'flex'}>
                <img width="100%" height="100%" src={image} alt="" />
            </Box>

            <Box margin={theme.spacing(5)} width={smDawn === true ? '100%' : '30%'} >

                <Box display="flex" justifyContent="center" flexDirection="column">
                    <Typography id="logo" display="flex" justifyContent="center" margin={theme.spacing(3)}>

                        <img width={theme.spacing(20)} height="99%" src={logo} alt="" /> 

                    </Typography>

                    <Box component="form" width="100%">
                        <Box margin={theme.spacing(3, 0)}> 
                            <TextField
                                id="userInput"
                                label="Usúario *"
                                type="text"
                                autoComplete="current-user"
                                helperText="Usúario é obrigatório"
                                fullWidth
                                value={email}
                                onChange={e => setemail(e.target.value)}                                 
                                />
                        </Box> 

                        <Box margin={theme.spacing(3, 0)}> 
                            <TextField
                                id="Password"
                                label="Senha*"
                                type="password"
                                autoComplete="current-password"
                                helperText="Senha é obrigatória"
                                fullWidth
                                value={password}
                                onChange={e => setpassword(e.target.value)}
                                />
                        </Box> 

                        <Box margin={theme.spacing(3, 0)}> 
                            <Button color="primary" variant="contained" fullWidth onClick={() => login(email, password)}>Continuar</Button>
                        </Box> 

                    </Box>
                </Box>
                <Box>
                    <List component="nav">
                    <ListItemButton onClick={toggleTheme}>
                        <ListItemIcon>
                        <Icon>dark_mode</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Alternar tema" />
                    </ListItemButton>
                    </List>
                </Box>
            </Box>
            
        </Box>
        </>   
    )
}