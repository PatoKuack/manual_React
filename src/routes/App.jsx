import { Layout } from '../containers/Layout'
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Menu } from "../components/Menu";
import { NotFound } from '../pages/NotFound';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useValues } from '../hooks/useValues.jsx';
import './App.css';

export default function App() {

  const {
    hideMenu,
    setHideMenu,
    syllabus1,
    syllabus2,
  } = useValues();

  return (
    <>
    <Layout>
      <HashRouter>
        <Header />
        <div className='relative w-full max-h-[calc(100vh-80px)] overflow-y-scroll sm:h-[calc(100vh-64px)]'>
          <Menu 
            syllabus1={syllabus1} 
            syllabus2={syllabus2} 
            hideMenu={hideMenu} 
            setHideMenu={setHideMenu} 
          />
          <Routes>
            <Route path='/' element={<Content />}></Route>
            <Route path='/:slug' element={
              <Content 
                syllabus1={syllabus1} 
                syllabus2={syllabus2} 
              />
            }></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </HashRouter>
    </Layout>
    </>
  )
}