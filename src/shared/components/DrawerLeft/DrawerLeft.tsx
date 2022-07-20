import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Drawer, Icon, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useAppThemeContext, useAuthContext } from "../../contexts";
import { Enviroment } from "../../enviroment";
import image from "../../../assets/imgcapa.jpg"

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
    console.log(userdados)
    return (
        <>
            <Drawer open={true} variant={smDawn ? 'permanent' : 'persistent'}>

                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12), backgroundColor: 'orange' }}
                            alt="Foto do usuario." src={userdados.image}
                        />
                    </Box>

                    <Divider />

                    <Box flex={1} textAlign="center">
                        <h2>{userdados.firstName + ' ' + userdados.lastName}</h2>

                        <List component="nav">
                            <ListItemButton onClick={() => alert('Bem vindo! Esse painel é apenas uma pequena demonstração...')}>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Pagina Inicial" />
                            </ListItemButton>
                        </List>

                        <List component="nav">
                            <ListItemButton onClick={() => alert('Bem vindo! Esse painel é apenas uma pequena demonstração...')}>
                                <ListItemIcon>
                                    <Icon>ballot</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Receita" />
                            </ListItemButton>
                        </List>

                        <List component="nav">
                            <ListItemButton onClick={() => alert('Bem vindo! Esse painel é apenas uma pequena demonstração...')}>
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
                <Card sx={{ minWidth: 600 }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt="Paella dish"
                    />
                    <CardHeader
                        avatar={
                            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12), bgcolor: "orange" }}
                                aria-label="recipe" src={userdados.image}  >
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                            </IconButton>
                        }
                        title={userdados.username}
                        subheader={userdados.email}
                    />

                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Sexo: {userdados.gender}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {userdados.firstName + ' ' + userdados.lastName}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            ID: {userdados.id}
                        </Typography>
                        <Typography variant="body2">
                            <br />
                            {'"Uma simple tela. feita por mim ^^"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
            {children}
        </>
    )
}