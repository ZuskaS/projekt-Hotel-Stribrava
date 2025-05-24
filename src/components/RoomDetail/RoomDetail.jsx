export const RoomDetail = ({ room }) => {
  return (
    <div>
      <h2>{`Pokoj ${room.name}, ${room.cost} kč na osobu za noc`}</h2>
      <div className="columns-2">
        <div className="column">
          <img src={room.image} />
          <p>{room.describe}</p>
        </div>
      </div>
    </div>
  );
};
