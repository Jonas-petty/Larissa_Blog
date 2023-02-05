import PostsList from './PostsList'
import styled from 'styled-components';
import { useState } from 'react';

const ShowMoreButton = styled.button`
    cursor: pointer;
    display: block;
    
    margin: auto;
    padding: 5px;
    border: 2px solid #574AE8;
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
        color: #FFF;
        background-color: #574AE8;
        font-size: 1rem;
    }

`

function Home({ db }) {
    const [ amount , setAmount ] = useState(10)

    return (
        <>
            <main>
            <PostsList db={db} amount={amount}/>
            <ShowMoreButton onClick={() => setAmount(prevAmount => prevAmount + 5)}>Mostrar mais</ShowMoreButton>
            </main>
        </>
    );
}

export default Home;