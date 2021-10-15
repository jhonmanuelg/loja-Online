import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>PRODUTOS</Footer.Title>
                    <Footer.Link href="#">Notebooks</Footer.Link>
                    <Footer.Link href="#">Tablet</Footer.Link>
                    <Footer.Link href="#">Watches</Footer.Link>
                    <Footer.Link href="#">TV e Áudio</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>SUPORTE TÉCNICO</Footer.Title>
                    <Footer.Link href="#">Chat Online</Footer.Link>
                    <Footer.Link href="#">Email</Footer.Link>
                    <Footer.Link href="#">Fale Conosco</Footer.Link>
                    <Footer.Link href="#">Centro de Serviços</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>COMPANHIA</Footer.Title>
                    <Footer.Link href="#">Lojas</Footer.Link>
                    <Footer.Link href="#">Promoção</Footer.Link>
                    <Footer.Link href="#">Quem Somos </Footer.Link>
                    <Footer.Link href="#">Notícias</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>LOJA ONLINE</Footer.Title>
                    <Footer.Link href="#">Chat Online</Footer.Link>
                    <Footer.Link href="#">Fale Conosco</Footer.Link>
                    <Footer.Link href="#">Dúvidas Frequentes </Footer.Link>
                    <Footer.Link href="#">Promoções</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>SIGA-NOS</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
            <hr/>
            <Footer.Flex>
            <br/>
                <p>&copy;{new Date().getFullYear()} Loja-Online | Toti</p>
            </Footer.Flex>
        </Footer>
    )
}