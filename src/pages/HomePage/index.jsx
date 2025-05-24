import { Header } from '../../components/Header/Header';
import { Contact } from '../../components/Contact/Contact';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main></main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
};
