import React, { Component } from 'react';

class App extends Component{
    
    
    constructor(props){
    super(props);
    this.state = {
        status: false
    }

    this.mudar = this.mudar.bind(this)
}

  mudar(){
    this.setState({status: true})
  }

    render(){
        return(
            <div>
               {this.state.status ?
                  <div> 
                    <h2>Bem vindo ao sistema</h2>
                  </div> :

                  <div>
                    <h2>Ola visitante</h2>
                    <button onClick={this.mudar}>login</button>
                  </div>
                  
               }
            </div>
        )
    }
}

export default App