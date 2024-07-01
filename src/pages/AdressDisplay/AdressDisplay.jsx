import "./AdressDisplay.css"

export default function AdressDisplay({ item }) {
    return (
        <div className="centerDisplay">
            <h1>Endereço</h1>
            <p><strong>Rua:</strong> {item.logradouro}</p>
            <p><strong>Bairro:</strong> {item.bairro}</p>
            <p><strong>Cidade:</strong> {item.localidade}</p>
            <p><strong>Estado:</strong> {item.uf}</p>
        </div>
    )   
}