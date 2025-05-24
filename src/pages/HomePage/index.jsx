import { Header } from '../../components/Header/Header';
import { Contact } from '../../components/Contact/Contact';
import './style.css';
import { Rooms } from '../../components/Rooms/Rooms';
import { Order } from '../../components/Order/Order';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Rooms />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
};
