import { useEffect, useState } from 'react'
import { ReactDOM } from 'react-dom/client'
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import ScrollReveal from 'scrollreveal'

import Post from "./Post";

function PostsList({db}) {
    window.screen = ScrollReveal({reset: true})
    const [posts, setPosts] = useState([])


    useEffect(() => {
        onSnapshot(query(collection(db, 'Posts'), orderBy('createdAt', 'desc'), limit(10)), (snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc))
        })
    }, [])

    const postElements = posts.map((posts) => {
        const data = posts.data()
        return  <Post 
                    key={posts.id}
                    title={data.title}
                    createdAt={data.createdAt}
                    content={data.content}
                    id={posts.id}
                />
    })

    return (
        postElements
    );
}

export default PostsList;