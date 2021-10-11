import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Sobre Nós</Footer.Title>
                    <Footer.Link href="#">História</Footer.Link>
                    <Footer.Link href="#">Clientes</Footer.Link>
                    <Footer.Link href="#">Testemunhos</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Serviços</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consultando</Footer.Link>
                    <Footer.Link href="#">Desenvolvimento</Footer.Link>
                    <Footer.Link href="#">Projeto</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Entrar Em Contato</Footer.Title>
                    <Footer.Link href="#">Cookies</Footer.Link>
                    <Footer.Link href="#">Política de privacidade</Footer.Link>
                    <Footer.Link href="#">Termos e Condições</Footer.Link>
                    <Footer.Link href="#">Aviso Legal</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <hr/>
            <Footer>
                <p>
                &copy;{new Date().getFullYear()} Loja Online Toti | All right reserved | Terms Of Service | Privacy
                </p>
                </Footer>
            </Footer.Wrapper>
        </Footer>
    )
}