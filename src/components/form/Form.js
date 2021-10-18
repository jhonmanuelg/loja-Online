import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import '../form/styleform.css'



class Cadastrar extends React.Component{
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){

    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return(
      <>
      <div className="principal">
        <div className="secundario">
      <Button className="btnCadastro" outline color="primary" onClick={this.abrirModal}>CADASTRAR</Button>
      
      </div></div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
          Cadastro
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">nome</Label>
            <Input type="text" id="title"/> 
          </FormGroup>
          <FormGroup>
            <Label for="price">price</Label>
            <Input type="text" id="price"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary">Ingresar</Button>
            <Button color="primary">Actualisar</Button>
            <Button color="secondary" onClick={this.abrirModal}>cancelar</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default Cadastrar;