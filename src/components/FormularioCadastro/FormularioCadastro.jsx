import React ,{Component} from 'react'
import "./estilo.css"


export default class FormularioCadastro extends Component{
    

    contructor(){
        this.titulo = "";
        this.texto  = "";
        this.categoria = "Sem categoria";
       
    }
    state = {categorias : [],}

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
    handleMudancaDeTitulo =(evento) =>{
        this.titulo = evento.target.value
    }
    handleMudancaDeTexto = (evento) =>{
        this.texto  = evento.target.value 
    }
    handleMudancaCategoria = (evento) =>{
        this.categoria  = evento.target.value
    }

    criarCard =  ( evento) => {

      evento.preventDefault();
      evento.stopPropagation();
      this.props.criarNotas(this.titulo , this.texto , this.categoria);
    }
    render(){

        return (

            <form className="form-cadastro" onSubmit={this.criarCard}>
                <select onChange ={this.handleMudancaCategoria}className ="form-cadastro_input">
                <option>Sem categoria</option>
                    {this.state.categorias.map((categoria , index ) => {
                       return <option key = {index}>{categoria}</option>
                    })}
                </select>
                <input type="text" className="form-cadastro_input" onChange={this.handleMudancaDeTitulo}></input>
                <textarea onChange = {this.handleMudancaDeTexto}
                rows={15} className="form-cadastro"placeholder="Escreva uma mensagem" 
                className="form-cadastro_input"> 
                </textarea>

                <button className="form-cadastro_submit">enviar </button>
            </form>
        )
    }
}