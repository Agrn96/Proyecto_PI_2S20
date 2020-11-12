import React from 'react'
import './EstilosPerfil.css'

class verPensum extends React.Component{
    super(props){
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h2>Pensum Ingenieria en Ciencias y Sistemas</h2>
                <img id="VerPensum" src="https://www.ingenieria.usac.edu.gt/pensa/ingenieria_sistemas.jpg"> 
                </img>
            </div>
        )
    }
}

export default verPensum