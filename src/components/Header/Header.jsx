import './Header.css'
import hotelImage from './img/hotel.jpg'

export const Header = () => {
    return (
        <div class="banner">
            <div class="banner__stripe">
                <div class="container">
                    <h1>Hotel Stříbrava</h1>
                    <p class="lead">
                        Rodinný hotel v malebné krajině Českého středohoří.
                    </p>
                </div>
                <img src={hotelImage} alt='hotel'/>
            </div>
        </div>
    )
}