import { Button, TextField, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import image from "../../../assets/imgcapa.jpg"
import logo from "../../../assets/logo.png"

interface IEventProviderProps {
    children: React.ReactNode
}


export function FormLogin ({children}: IEventProviderProps) {
    const theme = useTheme();
    const smDawn = useMediaQuery(theme.breakpoints.down('sm'));
    return(        <>
        <Box display='flex' overflow="hidden">

            <Box width="70%" height="100vh" display={smDawn === true ? 'none' : 'flex'}>
                <img width="100%" height="100%" src={image} alt="" />
            </Box>

            <Box margin={theme.spacing(5)} width={smDawn === true ? '100%' : '30%'}>

                <Box display="flex" justifyContent="center" flexDirection="column">
                    <Box id="logo" display="flex" justifyContent="center" margin={theme.spacing(3)}>

                        <img width={theme.spacing(20)} height="99%" src={logo} alt="" /> 

                    </Box>

                    <Box component="form" width="100%">
                        <Box margin={theme.spacing(3, 0)}> 
                            <TextField
                                id="userInput"
                                label="Usúario *"
                                type="text"
                                autoComplete="current-user"
                                helperText="Usúario é obrigatório"
                                fullWidth/>
                        </Box> 

                        <Box margin={theme.spacing(3, 0)}> 
                            <TextField
                                id="Password"
                                label="Senha*"
                                type="password"
                                autoComplete="current-password"
                                helperText="Senha é obrigatória"
                                fullWidth/>
                        </Box> 

                        <Box margin={theme.spacing(3, 0)}> 
                            <Button color="primary" variant="contained" fullWidth>Continuar</Button>
                        </Box> 

                    </Box>
                </Box>
            </Box>
            
            {children}
        </Box>
        
        </>   
    )
}