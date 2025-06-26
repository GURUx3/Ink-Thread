import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import BlogHome from './pages/BlogHome';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import CreateBlog from './pages/CreateBlog';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/posts" element={<BlogHome />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<CreateBlog/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;