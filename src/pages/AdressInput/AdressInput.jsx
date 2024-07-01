import AdressDisplay from "../AdressDisplay/AdressDisplay"
import { useState } from "react"
import "./AdressInput.css"
import { useEffect } from "react"

export default function AdressInput(){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchCEP, setSearchCEP] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    
    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${searchCEP}/json/`)
            .then(response => response.json())
            .then(data => {
                setApiResponse(data)
            })

            .catch(err => {
                console.log(err)
                setError(err)
            })

            .finally(() => {
                setLoading(false)
            })
    }, [searchCEP])

    const handleInput = () => {
        setSearchCEP(document.getElementById("CEP").value)
    }

    return(
        <div className="centerInput">
            <input type="text" name="CEP" id="CEP"/>
            <button onClick={handleInput}>Buscar</button>
            {searchCEP !== '' && <AdressDisplay item={apiResponse}/>}
            {searchCEP === '' && loading != true && <p>Digite o CEP</p>}
            {loading && <p>Carregando...</p>}
        </div>

    )
}