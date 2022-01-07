import React ,{Component} from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeCategoria from './components/ListaDeCategoria'
import "./assets/App.css"
import "./assets/index.css"
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component{
     
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    
  }
    
  /*criarNotas = (titulo  , texto , categoria) =>{

      const novaNotas  = {titulo  , texto , categoria};
      const novoArrayNotas  = [...this.state.notas , novaNotas];
      const novoEstado  = {
          notas : novoArrayNotas,
      }
      this.setState(novoEstado);
     
  }
  */

  /*deletaNota = (index) =>{
        const arrayNovo  = this.state.notas;
        arrayNovo.splice(index , 1);
        console.log(this.state.notas)
        this.setState({notas : arrayNovo});
  }
  */
  /*adicionaCategoria = (valorCategoria) =>{
       const arrayCategoria  = [...this.state.categorias , valorCategoria];
       const novoEstado  = {...this.state , categorias : arrayCategoria}
       this.setState(novoEstado)
  }
  */
  render(){

    return (
      <div className ="conteudo">
        <FormularioCadastro categorias = {this.categorias} 
        criarNotas  = {this.notas.adicionarNota}/>
       
        <main className  = "conteudo-principal">
             <ListaDeCategoria
             adicionaCategoria ={this.categorias.adicionarCategoria} 
             categorias = {this.categorias}/>
             <ListaDeNotas deletaNota= {this.notas.apagarNota} notas={this.notas} ></ListaDeNotas>
        </main>
        
      </div>
  
    );
  }
  
}

export default App;
