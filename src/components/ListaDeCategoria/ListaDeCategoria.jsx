import React , {Component} from 'react'
import './estilo.css'


export default class ListaDeCategoria extends Component{
     
    constructor(){

        super();
        this.state = {categorias : [],}
        
    }
    componentDidMount(){
       
        this.props.categorias.inscrever(this.novaCategorias)
    }

    componentWillUnmount (){
        this.props.categorias.desinscrever(this.novaCategorias)
    }
    

    novaCategorias = (categorias) =>{
        console.log(categorias);
        this.setState({...this.state ,categorias});
    }
    handleEventoInput = (e) =>{
       
         if ( e.key === "Enter"){
             let valorCategoria = e.target.value
             this.props.adicionaCategoria(valorCategoria)
         }
    }

    
    render (){
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria  , index )=>{
                        return (<li key  = {index} className="lista-categorias_item">
                            {categoria}
                        </li>)
                    })}
                    
                </ul>
                <input type="text" 
                placehord ="escreve a categoria"
                onKeyUp = {this.handleEventoInput}
                className="lista-categorias_input" />
             </section>
        ) 
    }
}