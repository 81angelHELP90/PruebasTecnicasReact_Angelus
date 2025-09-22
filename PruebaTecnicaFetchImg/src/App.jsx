import { useState, useEffect } from 'react'
import './App.css'

const FACT_URL = 'https://catfact.ninja/fact'
const IMG_URL = 'https://cataas.com/cat/says/'

export default function App() {
    const [words, setFirstWord] = useState()
    const [fact, setFact] = useState()
    const [imgUrl, setImgUrl] = useState() 

    //fetch para recuperar la primer palabra
    useEffect(() => {
        fetch(FACT_URL)
        .then(res => {
            //Manejamos los errores: Hago lo de throw new Error para que el catch 
            //lo pueda tomar. Es que el catch en el fetch solo entra si hay un error tecnico
            //no con errores en la respuesta. Entonces con el Throw new Error abarcamos los dos escenarios
            if(!res.ok) throw new Error('Error fetching fact');

            return res.json()
        })
        .then(data => {
            const { fact } = data
            const words = fact.split(' ', 3).join(' ')

            setFirstWord(words)
            setFact(fact)
        })
        .catch(error => console.error(error))

    }, [])

    //Segundo fetch para recuperar una imagen en base a la primer palabra del fact
    useEffect(() =>{
        if(!words) return 

        fetch(`${IMG_URL}${words}?json=true`)
        .then(res => {
            if(!res.ok) throw new Error('Error fetching image')
                
            return res.json()
        })
        .then(data => {
            const { url } = data
            setImgUrl(url)
        })
        .catch(error => console.error(error))
    }, [words])

    return (
        <main>
            <h1>Get cat fact</h1>
            <section>
                {fact && <p>{fact}</p>}
                <img src={imgUrl} alt='image about cats'></img>
            </section>
        </main>
    )
}