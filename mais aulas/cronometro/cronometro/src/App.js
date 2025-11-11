import React, {Component} from 'react'
import './style.css'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            cronometro: 0,
            botao: "vai"
        }
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){
        let state = this.state

        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null;
            state.botao = "VAI"
        }else{
            this.timer = setInterval(() => {
            let state = this.state
            state.cronometro += 0.1;
            this.setState(state)
            }, 100);
            state.botao = 'PAUSAR'

        }

        this.setState(state)
    }

    limpar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null
        }
        let state = this.state 
        state.cronometro = null
        state.botao = "VAI"
        this.setState(state)
    }

    render(){
        return(
            <div className='container'>
                <img src={require('./assets/cronometro.png')} className='img'/>
                <a className='timer'>{this.state.cronometro.toFixed(2)}</a>
                <div className='areaBtn'>
                    <a onClick={this.vai} className='botao'>{this.state.botao}</a>
                    <a onClick={this.limpar} className='botao'>Limpar</a>
                </div>
            </div>
        )
    }
}

export default App