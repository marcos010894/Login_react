import { ExpandLess, ExpandMore, Visibility } from "@mui/icons-material"
import { Alert, Button, Icon, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, Snackbar, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import image from "../../../assets/imgcapa.jpg"
import logo from "../../../assets/logo.png"
import { useAppThemeContext, useAuthContext } from "../../contexts"

interface IEventProviderProps {
    children: React.ReactNode
}


export function FormLogin({ children }: IEventProviderProps) {
    const theme = useTheme();
    const smDawn = useMediaQuery(theme.breakpoints.down('sm'));

    const { isAutentication, login } = useAuthContext()
    const [user, setuser] = useState('')
    const [password, setpassword] = useState('')
    const [erroruser, setErroruser] = useState('')
    const [errorpassword, setErrorpassword] = useState('')
    const { toggleTheme } = useAppThemeContext()
    const [open, setOpen] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    if (isAutentication) return (
        <>{children}</>
    );

    const viewPasswordFunc = () => {
        if (viewPassword) {
            setViewPassword(false)
        } else {
            setViewPassword(true)
        }
    }

    const handleSubmit = (user: string, password: string) => {
        login(user, password).then((response) => {
            if (response == "Request failed with status code 400") {
                setErroruser('campo vazio ou usúario incorreto')
                setErrorpassword('campo vazio ou usúario incorreto')
                setOpen(true);
            }
        })
    }

    return (<>
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
                                error={!!erroruser}
                                value={user}
                                onChange={e => setuser(e.target.value)}
                            />
                        </Box>

                        <Box margin={theme.spacing(3, 0)}>
                            <TextField
                                label="Senha*"
                                type={viewPassword ? 'text' : 'password'}
                                autoComplete="current-password"
                                helperText="Senha é obrigatória"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" onClick={() => { viewPasswordFunc() }}>
                                            <Visibility color="primary" />
                                        </InputAdornment>
                                    )
                                }}
                                error={!!errorpassword}
                                value={password}
                                onChange={e => setpassword(e.target.value)}
                            />
                        </Box>

                        <Box margin={theme.spacing(3, 0)}>
                            <Button color="primary" variant="contained" fullWidth onClick={() => handleSubmit(user, password)}>Continuar</Button>
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity="error">Usúario ou Senha incorretos!</Alert>
            </Snackbar>
        </Box>
    </>
    )
}