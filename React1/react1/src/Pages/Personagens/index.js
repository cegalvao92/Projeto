import React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personagens: [
        {
          name: "Mario",
          imagemUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzu_5rJIJEyz2T0AxmSvV3I4qiioHfyeiecA&usqp=CAU",
        },
        {
          name: "Luigi",
          imagemUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzd1rx_wMLhljLJYE1ViBPyFUXQhfQbxnlg&usqp=CAU",
        },
        {
          name: "Peach",
          imagemUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YDLIhSFgE1x5EIU45CplrKqUyCzP3mTkSA&usqp=CAU",
        },
        {
          name: "Daisy",
          imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWwDntYKB02sZYmzWD5B0LZophkIJlxb_1g&usqp=CAU",
        }
      ],
      
  }}

        

  render() {
      const { personagens, nomePersoanagem, imagemUrlPersonagem, editando, indexEditando } =
        this.state;

      return (
        <div className="container">
          <main className="main">
            <h1>Personagens</h1>
            <hr />
            
            
            <hr />
            
            <ul>
              {personagens.map((f, index) => (
                <li key={index}>
                  <h3>{f.name}</h3>
                  <img src={f.imagemUrl} />
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
  
