export const RoomCard = ({ room, onRoomClick }) => {
  return (
    <div className="card" onClick={() => onRoomClick(room)}>
      <img className="card__image" src={room.image} />
      <div className="card__title">{room.name}</div>
      <div className="card__body">{`${room.cost} Kč na osobu`}</div>
    </div>
  );
};
