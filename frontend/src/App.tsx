import {useRef, RefObject} from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

const IntroductionPage = lazy(() => import('./pages/IntroductionPage'));
const ExhibitionPage = lazy(() => import('./pages/ExhibitionPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

function App() {
  const ref: RefObject<HTMLDivElement>  = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <BrowserRouter>
      <NavBar handleClick={handleClick}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
         
        <Route path='visit' element={
          <Suspense fallback={<div>Loading...</div>}>
            <ExhibitionPage />
          </Suspense>
        } />

        <Route path='introductions' element={
          <Suspense fallback={<div>Loading...</div>}>
            <IntroductionPage />
          </Suspense>
        }
        />
       
        <Route path='news' element={
          <Suspense fallback={<div>Loading...</div>}>
            <NewsPage />
          </Suspense>
        } />

        <Route path='about' element={
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUsPage />
          </Suspense>
        } />

        <Route path='*' element={<ErrorPage />} />

        {/* <Route path='Announcement/:id' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Announcement />
          </Suspense>
        } /> */}
      
      </Routes>
      <Footer ref={ref}/>
      <div ref={ref}/>
    </BrowserRouter>
    
  );
}

export default App;