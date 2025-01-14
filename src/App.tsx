import './output.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TopPage from './pages/TopPage';
import PostPage from './pages/PostPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/posts/:id' element={<PostPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  );
};
export default App;
