import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../../assets/arrivals.css";

function NewArrivalsComponent() {
    const arriavals = [
        {
            href: "",
            title: "ECCO BIOM 2.2 M",
            image: "https://product.hstatic.net/1000143422/product/beige_83077460926_a__6__f3ef21421e4e479f8cf25660ec88ba8f.jpg",
        },
        {
            href: "",
            title: "ECCO BIOM 2.2 M",
            image: "https://product.hstatic.net/1000143422/product/white_83076401007_a__2__b0d376243cfc45b68988e7c021b8ef4d.jpg",
        },
        {
            href: "",
            title: "ECCO BIOM 2.2 W",
            image: "https://product.hstatic.net/1000143422/product/white_83077360939_a__3__2544874814f7457d8fc04d2c75cb2eb9.jpg",
        },
        {
            href: "",
            title: "ECCO BIOM 2.2 W",
            image: "https://product.hstatic.net/1000143422/product/green_83077360943_a__2__5a0c014bbdc64dcf8e1c8fd5ebc53514.jpg",
        },
    ];

    return (
        <Container className="text-center">
            <h2 className="">NEW ARRIVALS</h2>
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
            <Row className="">
                <Col className="poster">
                    <div className="card-poster">
                        <img className="img-top"
                            variant="top"
                            src="https://file.hstatic.net/1000143422/file/ec-mobile_banner_slider_480x480px_1_biom_2.2_17f5516648fc4836a5799f4fbe29cca2.png"
                        />
                        <div className="mt-3">
                            <h4 className="title-product">ECCO BIOM 2.2 W</h4>
                            <a href="">
                                <Button className="btn-link-product mt-3" variant="primary">
                                    MUA NGAY
                                </Button>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col className="poster">
                    <div className="card-poster">
                        <img className="img-top"
                         variant="top" 
                         src="https://file.hstatic.net/1000143422/file/ec_banner_hp_640x640px_2_street_m.png" />
                        <div className="mt-3">
                            <h4 className="title-product">ECCO STREET 720 M</h4>
                            <a href="">
                                <Button className="btn-link-product mt-3" variant="primary">
                                    MUA NGAY
                                </Button>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default NewArrivalsComponent;
