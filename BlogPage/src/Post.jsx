import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal'

const PostContainer = styled.div`
    background-color: #FFFFFF;
    
    a {
        text-decoration: none;
    }

    .info, .content {
        color: #717171;
    }

    .content {
        font-size: 0.9rem;
    }

    max-width: 700px;
    margin: 10px auto;
    padding: 20px;

    border-radius: 5px;

    box-shadow: 0 0 10px #00000022;

    &:hover {
        transform: scale(1.01);
    }
`

const PostTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 400;
    color: #1A202C;

    margin-top: 20px;
`

function getFirstParagraph(text) {
    text = text.split("><")
    console.log(text)
    let newParagraph = ""
    for (var i = 0; i < text.length; i++) {
        if (text[i].includes("<p>")) {
            newParagraph = text[i]
        }
    }
    
    return newParagraph
}

function Post({title, createdAt, content, id}) {
    const date = new Date(createdAt.seconds * 1000)
    let dateString = `${date.getDate()} de ${date.toLocaleString('pt-BR', {month: 'long'})}, ${date.getFullYear()}`

    const data = {title, dateString, content}
    
    let paragraphContent = getFirstParagraph(content)

    ScrollReveal().reveal('.post')
    return (
        <PostContainer className='post'>
            <Link to={`/posts/${title}`} state={data}>
                <p className='info'>Escrito por Larissa Felix em {dateString}</p>
                <PostTitle>{title}</PostTitle>
                <div className='content' dangerouslySetInnerHTML={{__html: paragraphContent}}>
                    {/* Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Quas, alias ipsam neque
                    laborum id ea delectus deleniti accusantium
                    sunt vel enim! Assumenda fugit deserunt dolore
                    perspiciatis excepturi itaque, vitae dicta? */}
                </div>
                
            </Link>
        </PostContainer>
        
    );
}

export default Post;