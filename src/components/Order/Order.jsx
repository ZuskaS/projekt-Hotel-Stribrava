import { Formular } from '../Formular/Formular';
import { RoomDetail } from '../RoomDetail/RoomDetail';

export const Order = ({ room }) => {
  return (
    <section className="light">
      <div className="container">
        <RoomDetail room={room} />
        <Formular />
      </div>
    </section>
  );
};
