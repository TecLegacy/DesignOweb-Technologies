import React from 'react';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import LandingPage from './components/section first/LandingPage';
import Business from './components/section third/Business';
import WapperTestimonials from './components/testimonials/wrapper testimonials/WapperTestimonials';

function App() {
  return (
    <React.Fragment>
      <Header />
      <LandingPage />
      <WapperTestimonials />
      <Business />
      <Form />
      <Footer />
    </React.Fragment>
  );
}

export default App;
