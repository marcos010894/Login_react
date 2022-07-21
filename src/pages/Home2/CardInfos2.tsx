import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"

import image from "../../assets/imgcapa.jpg"
import { Enviroment } from "../../shared/enviroment"

export const Home2 = () => {
    const dados_local_storage = localStorage.getItem(Enviroment.DADOS_USER)
    const userdados = JSON.parse(dados_local_storage as string)
    const theme = useTheme();
    const smDawn = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Card sx={!smDawn ? { minWidth: '50%' } : { minWidth: '85%' }}>

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
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
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
                        {'"Uma segunda tela apenas para navegar. ^^"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Mais Opções</Button>
                </CardActions>
            </Card>
        </>
    )
}