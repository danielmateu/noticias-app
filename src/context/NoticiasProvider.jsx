import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

const apiKey = import.meta.env.VITE_API_KEY;
const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    useEffect(() => {
        const consultarApi = async () => {
            
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`
            
            const {data} = await axios(url);

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
        }
        consultarApi()
    }, [categoria]);

    useEffect(() => {
        const consultarApi = async () => {
            
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${apiKey}`
            
            const {data} = await axios(url);

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
            
        }
        consultarApi()
    }, [pagina]);

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
        setPagina(1)
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext
