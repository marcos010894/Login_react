import { AppBar, Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Drawer, Icon, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";
import { useAppThemeContext, useAuthContext } from "../../contexts";
import { Enviroment } from "../../enviroment";


interface IEventProviderProps {
    children: React.ReactNode
}

export function DrawerLeft({ children }: IEventProviderProps) {
    const theme = useTheme();
    const smDawn = useMediaQuery(theme.breakpoints.down('sm'));
    const { logout } = useAuthContext()
    const { toggleTheme } = useAppThemeContext()
    const dados_local_storage = localStorage.getItem(Enviroment.DADOS_USER)
    const userdados = JSON.parse(dados_local_storage as string)
    const [draweropen, setDrawerOpen] = useState<boolean>(false)
    console.log(smDawn)

    return (

        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                        <Typography >Bem vindo, {userdados.username}!</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={!smDawn ? true : draweropen} variant={smDawn ? 'temporary' : 'permanent'} onClose={() => setDrawerOpen(false)}>

                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12), backgroundColor: 'orange' }}
                            alt="Foto do usuario." src={userdados.image}
                        />
                    </Box>

                    <Divider />

                    <Box flex={1} textAlign="center">
                        <h3>{userdados.firstName + ' ' + userdados.lastName}</h3>

                        <List component="nav">
                            <ListItemButton >
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Pagina Inicial" />
                            </ListItemButton>
                        </List>

                        <List component="nav">
                            <ListItemButton >
                                <ListItemIcon>
                                    <Icon>ballot</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Receita" />
                            </ListItemButton>
                        </List>

                        <List component="nav">
                            <ListItemButton >
                                <ListItemIcon>
                                    <Icon>settings</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Configurações" />
                            </ListItemButton>
                        </List>

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

                        <List component="nav">
                            <ListItemButton onClick={logout} >
                                <ListItemIcon>
                                    <Icon>logout</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Sair" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height="100vh" marginLeft={smDawn ? 0 : theme.spacing(28)} display="flex" justifyContent="center" alignItems="center">
                {children}
            </Box>

        </>
    )
}