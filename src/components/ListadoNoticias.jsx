import { Grid, Pagination, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useNoticias } from "../hooks/useNoticias"
import { Noticia } from "./Noticia"


export const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(parseInt(totalNoticias / 20))

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

            <Stack 
                spacing={2}
                justifyContent='center'
                alignItems='center'
                sx={{
                    marginY: 5
                }}
            >
                <Pagination
                    count={totalPaginas}
                    color="primary" 
                    onChange={handleChangePagina}
                    page={pagina}
                />
            </Stack>
        </>
    )
}
