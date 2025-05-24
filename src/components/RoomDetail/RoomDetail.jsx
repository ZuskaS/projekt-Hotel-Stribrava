export const RoomDetail = ({ room }) => {
  return (
    <div>
      
      <div className="column">
        <img src={room.image} />
        <p>{room.describe}</p>
      </div>
    </div>
  );
};
