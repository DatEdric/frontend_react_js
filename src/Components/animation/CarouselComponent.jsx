import Carousel from "react-bootstrap/Carousel";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "../../assets/custom-carousel.css";

function DarkVariantExample() {
return (
<Carousel
fade
indicators={false}
data-bs-theme="dark"
prevIcon={<HiChevronLeft size={80} color="white" className="custom-prev-icon"/>}
nextIcon={<HiChevronRight size={80} color="white" className="custom-next-icon" />}
>
<Carousel.Item>
<img className="d-block w-100" src="https://file.hstatic.net/1000143422/file/ec-desktop_banner_slider_1920x600px_biom_2.2_cd61de8c431b4955b5b15ad8edd8710f.png" alt="First slide" />
</Carousel.Item>
<Carousel.Item>
<img className="d-block w-100" src="https://file.hstatic.net/1000143422/file/ec-desktop_banner_slider_1920x600px_street_720.png" alt="Second slide" />
</Carousel.Item>
<Carousel.Item>
<img className="d-block w-100" src="https://file.hstatic.net/1000143422/collection/banner-gruuv-1600x400-2_1929ec35a813443f99d8744731d536d2_master.jpg" alt="Third slide" />
</Carousel.Item>
</Carousel>
);
}

export default DarkVariantExample;