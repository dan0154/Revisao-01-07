import AdressDisplay from "../AdressDisplay/AdressDisplay"
import { useState } from "react"
import "./AdressInput.css"
import { useEffect } from "react"

export default function AdressInput(){
    const [loading, setLoading] = useState(false)
    const [searchCEP, setSearchCEP] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    const [err, setErr] = useState(false)
    
    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch(`https://viacep.com.br/ws/${searchCEP}/json/`)
            const data = await response.json()
            setApiResponse(data)
            setErr(false)
        } catch (error){
            console.error("Houve um erro")
            setErr(true)
        }
        setLoading(false)
    }

    return(
        <div className="centerInput">
            <input value={searchCEP} type="text" name="CEP" id="CEP" onChange={(e) => setSearchCEP(e.target.value)}/>
            <button onClick={fetchData}>Buscar</button>
            {apiResponse !== '' && err != true && !loading  && <AdressDisplay item={apiResponse}/> || loading && <p>Carregando...</p> || err && <p>Houve um erro. Digite um CEP válido ou tente novamente mais tarde.</p>}
            {apiResponse === '' && loading != true && !err && <p>Digite o CEP</p>}
        </div>

    )
}