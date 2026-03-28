import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Products from './sections/Products';
import About from './sections/About';
import Branches from './sections/Branches';
import Contact from './sections/Contact';
import './App.css';

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<LoadingFallback />}>
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <Navigation />
          <main>
            <Hero />
            <Products />
            <About />
            <Branches />
            <Contact />
          </main>
          <Footer />
        </div>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
