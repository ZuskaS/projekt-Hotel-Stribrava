import { useEffect, useState } from 'react';
import { RoomOffer } from '../RoomOffer/RoomOffer';
import { Order } from '../Order/Order';

export const Rooms = () => {
  const [room, setRoom] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    console.log(selectedRoom);
  };

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const responseData = await response.json();
      setRoom(responseData.data);
    };
    fetchRoom();
  }, []);

  return (
    <>
      <RoomOffer rooms={room} onRoomClick={handleRoomClick} />
      {selectedRoom && <Order room={selectedRoom} />}
    </>
  );
};
