import React ,{Component} from 'react'
import "./estilo.css"
import {ReactComponent  as DeleteSvg} from '../../assets/imgs/delete.svg'
export default class CardNotas extends Component {
    
    apagar = () =>{
          let index  = this.props.indice;
          this.props.deletaNota(index);
    }
    render (){

        return (
            
                <section className = "card-nota">
                    <header className = "card-nota_cabecalho">
                       <h3 className ="card-nota_titulo"> {this.props.titulo}</h3> 
                       <DeleteSvg  onClick = {() =>this.props.deletaNota()}/>
                       <h3>{this.props.categoria}</h3>
                    </header>
                    <p className = "card-nota_texto">{this.props.texto}</p>
                    
                </section>
        )
    }
}