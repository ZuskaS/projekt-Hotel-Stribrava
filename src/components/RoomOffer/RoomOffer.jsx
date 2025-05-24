import { RoomCard } from "../RoomCard/RoomCard"

export const RoomOffer = () => {
    return (
        <section className="dark">
            <div className="container">
                <h2>Naše pokoje</h2>
                <p>
                    Vyberte si, který z našich pokojů je pro vás ten pravý.
                </p>
                <div className="cards-row">
                    {rooms.map((room) =>
                        <RoomCard key={room.id} name={room.name} cost={room.cost} image={image}/>)
                    }



                </div>
            </div>
        </section>
    )
}