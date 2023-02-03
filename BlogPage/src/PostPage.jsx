import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

function PostPage({ content }) {

    const { postId } = useParams()
    const { state } = useLocation()

    const PostContainer = styled.div`
        padding: 20px;
    `

    const Title = styled.h1`
        font-size: 2.1rem;
        text-align: center;
        color: red;
        margin-bottom: 10px;
    `

    const PostContent = styled.div`
        ul, ol {
            margin-left: 40px;
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