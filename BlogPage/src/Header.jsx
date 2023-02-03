import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.header`
    background: linear-gradient(90deg, #574AE8, #3EA1DB);
    padding: 0 20px;
`

const Nav = styled.nav`
    max-width: 700px;
    margin: auto;
    padding: 1.5rem 0;

    display: flex;
    flex-direction: column;

    .text_content {
        h1, a {
            color: #FFF;
            text-decoration: none;
            font-size: 20px;
            font-weight: 400;
            transition: 0.2s;
        }
        
        a:hover {
            transform: scale(1.1);
        }
        
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
import SearchInput from "./SearchInput";

function Header() {
    return (
        <HeaderDiv>
            <Nav>
                <div className="text_content">
                    <h1>Larissa</h1>
                    <Link to='/'>Blog</Link>
                </div>
                <SearchInput
                    placeholder="Pesquisar no blog" 
                />
            </Nav>
        </HeaderDiv>
    );
}

export default Header;