import PostsList from './PostsList'

function Home({ db }) {
    return (
        <>
            <main>
            <PostsList db={db}/>
            </main>
        </>
    );
}

export default Home;