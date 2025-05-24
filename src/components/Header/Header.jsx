import './Header.css';
import hotelImage from './img/hotel.jpg';

export const Header = () => {
  return (
    <div className="banner">
      <div className="banner__stripe">
        <div className="container">
          <h1>Hotel Stříbrava</h1>
          <p className="lead">
            Rodinný hotel v malebné krajině Českého středohoří.
          </p>
        </div>
        <img src={hotelImage} alt="hotel" />
      </div>
    </div>
  );
};
