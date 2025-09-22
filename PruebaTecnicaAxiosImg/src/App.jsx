import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App(){
    const [fact, setFact] = useState()

    useEffect(() => {
        axios.get('https://catfact.ninja/fact')
        .then(response => {
            const { fact } = response.data
            console.log('fact: ', fact)
            setFact(fact)
        })
        .catch(error => console.log(error))
    }, [])
    return(
        <main>
            {fact && <h1>{fact}</h1>}
        </main>
    )
}