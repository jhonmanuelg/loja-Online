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
            <Label for="price">ID</Label>
            <Input type="text" id="id"/>
          </FormGroup>
          <FormGroup>
            <Label for="price">Img</Label>
            <Input type="file" id="img"/> 
          </FormGroup>
          <FormGroup>
            <Label for="title">nome</Label>
            <Input type="text" name="" id="title"/> 
          </FormGroup>
          <FormGroup>
            <Label for="price">price</Label>
            <Input type="text" id="price"/> 
          </FormGroup>
          <FormGroup>
            <Label for="price">Category</Label>
            <Input type="text" id="category"/> 
          </FormGroup>

          <FormGroup>
            <Label for="price">cantidad</Label>
            <Input type="text" id="cantidad"/> 
          </FormGroup>

        </ModalBody>

        <ModalFooter>
            <Button color="primary">Ingressar</Button>
            <Button color="primary">Atualizar</Button>
            <Button color="secondary" onClick={this.abrirModal}>Sair</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default Cadastrar;