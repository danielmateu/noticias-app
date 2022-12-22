import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"


export const Noticia = ({ noticia }) => {

    // console.log(noticia.url);

    const { urlToImage, url, title, description, source } = noticia

    return (
        <Grid
            item
            md={6} lg={4}
        >
            <Card>
                {
                    urlToImage && (
                        <CardMedia
                    component='img'
                    alt={`imagen de la noticia ${title}`}
                    image={urlToImage}
                    height={250}
                />
                )}
                <CardContent>
                    <Typography 
                        variant='body'
                        color='error'
                    >
                        {source.name}
                    </Typography>
                    <Typography 
                        variant='h5'
                        component='div'
                    >
                        {title}
                    </Typography>
                    <Typography 
                        variant='body2'
                    >
                        {description}
                    </Typography>
                    <CardActions>
                        <Link
                            href={url}
                            target='_blank'
                            variant="button"
                            width='100%'
                            textAlign='center'
                            sx={{
                                textDecoration:'none'
                            }}
                        >Leer noticia</Link>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}
