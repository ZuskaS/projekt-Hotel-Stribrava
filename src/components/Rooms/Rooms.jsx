import { useEffect, useState } from "react"
import { RoomOffer } from "../RoomOffer/RoomOffer"

export const Room = () => {
    const [room, setRoom] = useState([]);
    useEffect(() => {
        const fetchRoom = async () => {
            const response = await fetch('http://localhost:4000/api/rooms');
            const responseData = await response.json()
            setRoom(responseData.data)
        };
        fetchRoom();
    },[]);

        return (
            <>
                <RoomOffer />
                <Order />
            </>
        )
    }