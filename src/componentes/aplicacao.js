import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../redux/actions'

class Aplicacao extends Component {
   
    render() {
        const {valor, adicionarUm, menosUm} = this.props
        
        return (
            <div className="Aplicacao">
                
                <p>{valor}</p>
                <br/>

                <button  onClick={() => adicionarUm()}>Adicionar</button>
                <button onClick={ () => menosUm() } > Subtrair</button>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    valor: state.valores.valor
})

export default connect(mapStateToProps, actions)(Aplicacao)