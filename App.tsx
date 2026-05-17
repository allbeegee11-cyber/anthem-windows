/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import EstimateSystem from './components/EstimateSystem';
import Trust from './components/Trust';
import Gallery from './components/Gallery';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <EstimateSystem />
        <Gallery />
        <Trust />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
