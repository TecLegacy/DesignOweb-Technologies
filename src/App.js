import React from 'react';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import LandingPage from './components/section first/LandingPage';
import Business from './components/section third/Business';
import WapperTestimonials from './components/testimonials/wrapper testimonials/WapperTestimonials';
import style from './app.module.css';
function App() {
  return (
    <React.Fragment>
      <div className={style.app}>
        <Header />
        <LandingPage />
        <WapperTestimonials />
        <Business />
        <Form />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
