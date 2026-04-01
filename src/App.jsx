import './App.css';
import Navbar               from './components/Navbar';
import Hero                 from './components/Hero';
import ValueProposition     from './components/ValueProposition';
import ProfileSection       from './components/ProfileSection';
import SmartMatching        from './components/SmartMatching';
import CollaborationFlows   from './components/CollaborationFlows';
import LaunchProjects       from './components/LaunchProjects';
import KizukiLogoInterlude  from './components/KizukiLogoInterlude';
import AboutUs              from './components/AboutUs';
import FAQ                  from './components/FAQ';
import WaitlistTicker       from './components/WaitlistTicker';
import FinalCTA             from './components/FinalCTA';
import Footer               from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '101px' }}>
        <Hero />
        <ValueProposition />
        <ProfileSection />
        <SmartMatching />
        <CollaborationFlows />
        <LaunchProjects />
        <KizukiLogoInterlude />
        <AboutUs />
        <FAQ />
        <WaitlistTicker />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
