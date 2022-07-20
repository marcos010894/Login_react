import { Avatar, Button, Divider, Drawer, useMediaQuery, useTheme } from "@mui/material"
import {Box} from "@mui/system"

interface IEventProviderProps {
    children: React.ReactNode
}
export function DrawerLeft ({children} : IEventProviderProps){
    const theme = useTheme();
    const smDawn = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <>
        <Drawer open={true} variant={smDawn ? 'permanent' : 'persistent'}>

            <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                    <Avatar                         
                        sx={{height: theme.spacing(12), width: theme.spacing(12)}}
                        alt="Foto do usuario." src="https://cadareceita.com.br/wp-content/uploads/2021/06/chimichurri-cadareceita-2-1024x683.jpg"  
                    />
                </Box>

                <Divider />

                <Box flex={1} textAlign="center">
                   <Button>Bem VIndo, Usuario!</Button>  
                </Box>
            </Box>
        </Drawer>
        
        <Box height="100vh" marginLeft={smDawn ? 0 : theme.spacing(28)}>
           teste 
        </Box>
        {children}
        </>
    )
}