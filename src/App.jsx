import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Hero/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />

      <main>

        <HeroSection type="hero" /> 
{/* 
        <Project 
          title=""
          description=""
          type=""
          mediaSrc=""
          behanceUrl=""
          siteUrl=""
        /> */}

      <HeroSection type="biography" />

      </main>

        
      {/*       
        <img height="600" src="https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/hero.png" />
        <img height="600" src="https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/biography.png" /> */}

      {/* <video height="800" controls autoplay loop>
        <source src="https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/xtrafit.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

    <Footer />

    </div>
  );
}

export default App;
