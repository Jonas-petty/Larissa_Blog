import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

function PostPage({ content }) {

    const { postId } = useParams()
    const { state } = useLocation()

    const PostContainer = styled.div`
        padding: 20px;
        p {
            text-align: center;
        }
    `

    const Title = styled.h1`
        font-size: 2rem;
        text-align: center;
        margin-bottom: 10px;
    `

    const PostContent = styled.div`

        max-width: 700px;
        margin: auto;

        p {
            text-align: left;
            font-weight: 300;
        }

        pre {
            display: block;
            background-color: #EDEDED;
            padding: 20px;
            border-radius: 5px;

        }

        code {
            font-size: 0.9rem;
            font-family: 'Fira Code', monospace;
            font-weight: 500;
        }

        ul, ol {
            font-weight: 300;
            padding-left: 3rem
        }

        ul li::marker {
            color: #574AE8;
            font-size: 0.8rem;
        }

        blockquote {
            margin: 10px 0;
            padding: 20px;
            background-color: #EDEDED;
            border-left: 5px solid #3EA1DB;
            border-radius: 5px;
        }

        hr {
            border: 1px solid #574AE8;
        }
    `

    return (
        <PostContainer>
            {state.title && <Title>{state.title}</Title>}
            <p>Escrito por Larissa Felix em {state.dateString}</p>
            <PostContent dangerouslySetInnerHTML={{__html: state.content}}></PostContent>
        </PostContainer>
    );
}

export default PostPage;