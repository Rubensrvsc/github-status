import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('Um nome foi enviado: '+ this.state.value);
    event.preventDefault();
  }
  
render() {
  
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      <textarea value={this.state.value}/>
      </div>
  );
}
}

export default App;