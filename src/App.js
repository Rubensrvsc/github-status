import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import request from 'request'


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
      {this.state.listaItens.map(status => <h3>Nome: {status.name} Status: {status.status}</h3>)}
      </div>
  );
}
}

export default App;
