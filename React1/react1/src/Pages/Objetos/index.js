import React from "react";
import { Link } from "react-router-dom";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      objetos: [
        {
          name: "Banana",
          imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8w9NRNszHQcYlUMqhbxmaVJWEP1AIndLqQ&usqp=CAU",
        },
        {
          name: "Carapaça Verde",
          imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9K5jFpPBJ1XD5V13indyNNcUq9kvpanCqg&usqp=CAU",
        },
        {
          name: "Carapaça Vermelha",
          imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrkacIwU81PPSmy5HtbY5PTwG9q-FAGcpQQ&usqp=CAU",
        },
        {
          name: "Carapaças de Espinhos",
          imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BFv6t-BQn3ZAMQMDazwx69RUUUODZVcnaw&usqp=CAU",
        },
      ],
      nomeObjeto: "",
      imagemUrlObjeto: "",
      editando: false,
      indexEditando: null,
    };    
  }

    

  render() {
    const { objetos, editando, indexEditando } =
      this.state;

    return (
      <div className="container">
        <main className="main">
          <h1>Objetos</h1>
          <hr />
          <h2>
            {editando
              ? `Editando: ${objetos[indexEditando]?.nome}`
              : "Cadastre um novo objeto"}
          </h2>
          
          <hr />
          <h2>Objetos</h2>
          <ul>
            {objetos.map((f, index) => (
              <li key={index}>
                <h3>{f.name}</h3>
                <img src={f.imagemUrl} alt={f.name} />
                <br />
                
              </li>
            ))}
          </ul>
          <Link to="/" className="botao">Voltar</Link>
        </main>
      </div>
    );
  }
}
