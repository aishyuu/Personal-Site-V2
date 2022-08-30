import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';
import './index.css';
import App from './App';
import Projects from './pages/projects';
import Blog from './pages/blog'
import SinglePost from './pages/SinglePost';
import Post from './pages/Post';
import 'bulma/css/bulma.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/post/:slug' element={<SinglePost/>} />
            <Route path='/post' element={<Post />} />
        </Routes>
    </BrowserRouter>
);