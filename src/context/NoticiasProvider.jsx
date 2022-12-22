import axios from 'axios';
import { createContext, useEffect, useState } from 'react'


const apiKey = import.meta.env.VITE_API_KEY;
const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const consultarApi = async () => {
            
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}&pageSize=100`
            
            const {data} = await axios(url);
            // console.log(data.articles);
            setNoticias(data.articles);
        }
        consultarApi()
    }, [categoria])
    

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
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
