import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../assets/slick-carousel.css";

function SlickCarouselComponent() {
    const images = [
        {
            src: "https://file.hstatic.net/1000143422/file/ec_banner_slider_hp_850x445px_sculpted_sandal.png",
            title: "ECCO LEATHER GOODS",
            description: "Các thiết kế túi xách, và phụ kiện da cao cấp.",
            buttonText: "MUA NGAY",
        },
        {
            src: "https://file.hstatic.net/1000143422/file/ec_banner_slider_hp_850x445px_elu.png",
            title: "SANDAL COLLECTION",
            description: "Khám phá bộ sưu tập sandal mới nhất.",
            buttonText: "MUA NGAY",
        },
        {
            src: "https://file.hstatic.net/1000143422/file/ec_banner_slider_hp_850x445px_lt1.png",
            title: "SPORTS SHOES",
            description: "Giày thể thao chất lượng dành cho bạn.",
            buttonText: "MUA NGAY",
        },
    ];
    const arriaval_Boots = [
        {
            href: "",
            title: "ECCO STREET 720 W",
            image: "https://product.hstatic.net/1000143422/product/white_20971301007_a__2__49bae8c712354214a417944dd41841b5_master.jpg",
        },
        {
            href: "",
            title: "ECCO STREET 720 W",
            image: "https://product.hstatic.net/1000143422/product/beige_20975359113_a__2__cb75f3c90747468593afb8e299253f76_master.jpg",
        },
        {
            href: "",
            title: "ECCO STREET 720 W",
            image: "https://product.hstatic.net/1000143422/product/black_52081401001_a__2__d8d7ebbac560406b8cc737c99359298f_master.jpg",
        },
        {
            href: "",
            title: "ECCO STREET 720 W",
            image: "https://product.hstatic.net/1000143422/product/white_52081401007_a__2__16f1eb0b4da245448e3d8a01fb1bbb7b_master.jpg",
        },
    ];
    const arriavals = [
        {
            href: "",
            title: "ECCO SCULPTED SANDAL LX 35",
            image: "https://product.hstatic.net/1000143422/product/black_22278304001_a__2__164b09fc5ecd4ad280465e709f84b398_master.jpg",
        },
        {
            href: "",
            title: "ECCO SCULPTED SANDAL LX 35",
            image: "https://product.hstatic.net/1000143422/product/black_22277301001_a__3__7968f6ea5a7e4bb3bb791af7c341d7c0_master.jpg",
        },
        {
            href: "",
            title: "ECCO SCULPTED SANDAL LX 35",
            image: "https://product.hstatic.net/1000143422/product/black_22276301001_a__2__98988f8db1354037af3d68a5e65726bf_master.jpg",
        },
        {
            href: "",
            title: "ECCO SCULPTED SANDAL LX 55",
            image: "https://product.hstatic.net/1000143422/product/beige_22289301378_a__1__0d90537719a54e0098c5f5916508f094_master.jpg",
        },
    ];

    const settings = {
        // dots: true, // Hiển thị dấu chấm chỉ vị trí ảnh
        infinite: true, // Cho phép vòng lặp lại ảnh đầu tiên
        speed: 500, // Tốc độ chuyển ảnh
        slidesToShow: 1, // Số ảnh hiển thị
        slidesToScroll: 1, // Số ảnh di chuyển mỗi lần
        swipeToSlide: true, // Cho phép kéo ảnh
    };

    return (
        <Container className="mb-5">
            <h2 className="colection-h2 text-center my-5">NEW ARRIVALS</h2>
            <div className="">
                <Row className="mt-5">
                    {arriaval_Boots.map((i, index) => (
                        <Col key={index}>
                            <Card className="top-card" style={{ width: "19rem" }} key={index}>
                                <a href={i.href}>
                                    <Card.Img variant="top" src={i.image} />
                                    <Card.Body>
                                        <Card.Title>{i.title}</Card.Title>
                                    </Card.Body>
                                </a>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="slick-img" style={{ height: "500px", margin: "auto" }}>
                <Slider className="d-flex" {...settings}>
                    {images.map((image, index) => (
                        <div className="d-flex" key={index}>
                            <img src={image.src} alt={`Slide ${index}`} style={{ width: "1000px", height: "500px", outline: "none" }} />
                            <div className="text-center m-5">
                                <h5 className="colection">BỘ SƯU TẬP</h5>
                                <h4 className="title-colection">{image.title}</h4>
                                <p className="colection-info">{image.description}</p>
                                <a href="">
                                    <Button className="btn-buy" variant="dark">
                                        {image.buttonText}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Row className="mt-5">
                {arriavals.map((i, index) => (
                    <Col key={index}>
                        <Card className="top-card" style={{ width: "19rem" }} key={index}>
                            <a href={i.href}>
                                <Card.Img variant="top" src={i.image} />
                                <Card.Body>
                                    <Card.Title>{i.title}</Card.Title>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default SlickCarouselComponent;
