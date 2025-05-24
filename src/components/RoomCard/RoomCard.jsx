
export const RoomCard = ({image, name, cost}) => {
    return (
        <div className="card">
            <img className="card__image" src={image} />
            <div className="card__title">{name}</div>
            <div className="card__body">{cost}</div>
        </div>
    )
}