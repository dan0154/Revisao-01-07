import AdressInput from "./AdressInput/AdressInput"
import "./HomePage.css"

export default function HomePage(){
    return(
        <div className="center">
            <h1>Busca por CEP</h1>
            <AdressInput />
        </div>

    )
}