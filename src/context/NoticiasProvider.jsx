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

            console.log(data);

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
        }
        consultarApi()
    }, [categoria]);

    useEffect(() => {
    
    }, [pagina])
    
    

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias
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
