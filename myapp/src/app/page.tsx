
import Header from './components/Header';
import Main from './components/MainBody';
import Banner from './components/Banner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col  justify-center min-h-screen ">
      <Header />
      <Main />
      <Banner />
      <Footer />
    </div>
  );
}
