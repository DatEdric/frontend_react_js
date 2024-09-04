import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../../../assets/homePage.css";
import CarouselComponent from "../../animation/CarouselComponent";
import EccoGolfComponent from "../../client/home/EccoGolfComponent";
import IntroProductComnponent from "../../client/home/IntroProductComponent";
import NewArrivalsComponent from "../../client/home/NewArrivalsComponent";
import SlickCarouselComponent from "../../client/home/SlickCarouselComponent";

function HomePageComponent() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/home")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Home Page - My Website</title>
            </Helmet>
            <CarouselComponent />
            <NewArrivalsComponent />
            <SlickCarouselComponent />
            <EccoGolfComponent />
            <IntroProductComnponent />
        </>
    );
}

export default HomePageComponent;
