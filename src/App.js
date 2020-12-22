import React from 'react';
import './App.css';
import Header from './Header/Header';
import request from 'request';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listaItens: []
    }

  }

  refresh(){

  }

  componentDidMount(){
    const retorno = request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {  
    console.log(body.components[5].name);
    this.setState({listaItens: body.components});
    console.log(this.state.listaItens);
    
    //this.setState({listaItens: body.components[3]});
});



  }
  
render() {
  
  return (
    <div>
      <Header/>
      <ul>
      {this.state.listaItens.map(status => <li>Nome: {status.name} Status: {status.status}</li>)}
      </ul>
      <a class="botao_refresh">Ver status</a>
      </div>
  );
}
}

export default App;
