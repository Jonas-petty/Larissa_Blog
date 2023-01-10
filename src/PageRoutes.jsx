import { Route, Routes} from "react-router-dom";

import Home from "./Home";
import PostPage from "./PostPage";

function PageRoutes({db}) {
    return (
        <Routes>
            <Route path="/" element={<Home  db={db}/>}/>
            <Route path="/posts/:postId" element={<PostPage />}/>
        </Routes>
    );
}

export default PageRoutes;