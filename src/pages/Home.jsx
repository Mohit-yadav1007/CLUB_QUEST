import Header from '../components/Header';
import Hero from '../components/Hero';
import ClubScroll from '../components/ClubScroll';
import ClubCards from '../components/ClubCards';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <Hero />
        <ClubScroll />
        <ClubCards />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
