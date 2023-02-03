import styled from "styled-components";

import SearchIcon from './assets/search.svg'

const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;

    border-radius: 5px;

    img {
        margin: 10px;
        width: 20px;
    }

    
    input {
        ::placeholder {
            color:  #FFF;
            opacity: 0.5;   
        }

        background: transparent;
        border: 0;
        width: 100%;        
    }

    input:focus {
        color: #FFF;
        outline: none;
    }
`

function SearchInput({placeholder}) {
    return ( 
        <Container>
            <img src={SearchIcon} alt="Search Icon" />
            <input type="text" placeholder={placeholder} />
        </Container>
     );
}

export default SearchInput;