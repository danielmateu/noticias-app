import { Grid, Typography } from "@mui/material"
import { useNoticias } from "../hooks/useNoticias"
import { Noticia } from "./Noticia"


export const ListadoNoticias = () => {

    const {noticias} = useNoticias()

    // console.log(noticias);

    return (
        <>
            <Typography
                component='h2'
                variant='h4'
                textAlign={'center'}
                marginY={5}
            >
                Últimas noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >

                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
                
            </Grid>


        </>
    )
}
