import React ,{Component} from 'react'
import CardNotas from '../CardNotas/CardNotas.jsx'
import "./estilo.css"
export default class ListaDeNotas extends Component{
    
    
    state = {notas : []}

    componentDidMount(){
       
        this.props.notas.inscrever( this.novaNota);
    }
    componentWillUnmount (){
        this.props.categorias.desinscrever( this.novaNota)
    }
    novaNota = (nota) =>{
        
        this.setState({...this.state ,nota })   
    }
    render(){
        return (
            <ul  className="lista-notas">
                {
                    this.props.notas.notas.map((nota , index)=>{
                        return (
                            <li key = {index} className="lista-notas_item">
                                <CardNotas  categoria = {nota.categoria} indice  = {index} deletaNota = {this.props.deletaNota} titulo  = {nota.titulo}  texto  = {nota.texto}>
                                </CardNotas>
                            </li>
                        )
                    })
                }
                

            </ul>
        )
    }
}