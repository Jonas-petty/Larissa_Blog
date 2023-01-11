import styled from "styled-components";

const FooterStyle = styled.footer`
    background: linear-gradient(90deg, #574AE8, #3EA1DB);
    color: #FFF;

    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: #FFF;
    }
`

function Footer() {
    return (
        <FooterStyle>
            <p>© Larissa Todos os Direitos reservados</p>
            <p>Desenvolvido por <a href="https://github.com/jonas-petty" target='_blank'>@Jonas Felix</a>.</p>
        </FooterStyle>
    );
}

export default Footer;