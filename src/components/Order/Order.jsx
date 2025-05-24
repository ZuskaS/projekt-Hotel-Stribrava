import { Formular } from '../Formular/Formular';
import { RoomDetail } from '../RoomDetail/RoomDetail';

export const Order = ({ room }) => {
    return (
        <section className="light">
            <div className="container">
                <h2>{`Pokoj ${room.name}, ${room.cost} kč na osobu za noc`}</h2>
                <div className='columns-2'>
                    <RoomDetail room={room} />
                    <Formular />
                </div>
            </div>
        </section>
    );
};
