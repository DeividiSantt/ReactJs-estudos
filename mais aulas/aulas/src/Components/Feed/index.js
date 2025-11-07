import React, { Component }from 'react'

class Feed extends Component{
    

        ajuste = () => {
            const {curtidas, comentarios, username} = this.props

            if(this.props.curtidas === 1 && this.props.comentarios === 1){
                return <a>{this.props.curtidas} curtida / {this.props.comentarios} comentario</a>
            }if(this.props.curtidas === 1){
                 return <a>{this.props.curtidas} curtida / {this.props.comentarios} comentarios</a>
            }else{
                return (
             <div key={this.props.key}>
            <h3>{this.props.username}</h3>
            <a>{this.props.curtidas} curtidas / {this.props.comentarios} comentarios</a>
            <hr/>
          </div>  
        )
            }
           
        }
    render(){
        return this.ajuste()
    }
}

export default Feed