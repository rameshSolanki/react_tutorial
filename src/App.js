import './App.css';
import Contact from './components/contact';
import Blog from './components/blog';
import Home from './components/home';
import NotFound from './components/not-found';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Movie from './components/movie';
import Todo from './components/todo';
import UseEffectApi from './components/use-effect-api';
import UseEffectApiDetail from './components/use-effect-api-detail';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
       <Navbar />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/use-effect-api" element={<UseEffectApi />} />
          <Route path="/use-effect-api/:products_id" element={<UseEffectApiDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  )
};

export default App;
