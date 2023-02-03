import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import styled from 'styled-components';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import TextEditor from './TextEditor';

const NavBar = styled.nav`
    background: linear-gradient(90deg, #574AE8, #3EA1DB);
    display: flex;
    align-items: center;

    padding: 5px 20px;

    h1 {
        color: #FFF;
        margin-right: auto;
    }
    
    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        cursor: pointer;
        font-size: 1rem;
        background-color: transparent;
        color: #FFF;
        border: 1px solid #FFF;
        border-radius: 10px;

        width: 100px;
        height: 30px;

        transition: 0.2s;

        &:hover {
            background-color: #FFF;
            color: #264653;
        }
    }

    img {
        width: 60px;
        height: auto;
        border-radius: 50%;
        outline: 2px solid #FFF ;
        margin-left: 20px;
    }
`

const TitleInput = styled.input`
    outline: none;
    display: block;
    width: 400px;

    margin: auto;
    padding: 10px;

    text-align: center;
    font-size: 1rem;

    border: 1px solid #E8E8E8;
    border-radius: 5px;   

    &:focus {
        outline: 1px solid #574AE8;
        border: 1px solid  #3EA1DB;
    }
`

const SecondTitle = styled.h2`
    text-align: center;
    font-weight: 500;
    margin: 20px 0;
`


function Home({auth, db, logout}) {
    const [ postTitle, setPostTitle ] = useState('')
    console.log()

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: '<p>Escreva aqui...</p>',
    })

    async function SendPost(content) {
        
        const { uid, photoURL, displayName } = auth

        await addDoc(collection(db, 'Posts'), {
            title: postTitle,
            content: content,
            photoURL,
            uid,
            displayName,
            createdAt: serverTimestamp()
        })
        alert('Post foi enviado com sucesso!')
        setPostTitle('')
        editor.commands.setContent('<p>Escreva aqui...</p>')
    }

    return (
        <>
            <header>
                <NavBar>
                    <h1>Larissa</h1>

                    <ul>
                        <li><button onClick={logout}>Sair</button></li>
                        <li><img src={'https://media.licdn.com/dms/image/C4D03AQEz-yjIoDaX3g/profile-displayphoto-shrink_400_400/0/1654050492252?e=1677110400&v=beta&t=2mBbPJFoLK6xGECzNov6mPSCe-qbvtDAle8QG1tgy3A'} alt="Imagem Larissa" /></li>
                    </ul>
                </NavBar>
            </header>
            <main>
                <SecondTitle>Olá Larissa! Pronta para escrever mais um Artigo para seu Blog?</SecondTitle>
                
                <TitleInput type="text" onChange={event => setPostTitle(event.target.value)}
                name="title" id="title" value={postTitle} placeholder="Título do Post" />

                <TextEditor
                editor={editor}
                editorContent={<EditorContent editor={editor}/>}
                SendPost={SendPost}/>
            </main>
        </>
    );
}

export default Home;