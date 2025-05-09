
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import AboutTeacher from '../components/home/AboutTeacher';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
      <AboutTeacher />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Home;
