import { Button, Col, Container, Row } from "react-bootstrap";
import "../../../assets/eccoGolf.css";

const banner = [
    {
        img: "https://file.hstatic.net/1000143422/file/ec_banner_insider_1200x1200px_1.png",
        title: "Golf LT1",
    },
    {
        img: "https://file.hstatic.net/1000143422/file/ec_banner_insider_1200x1200px_2.png",
        title: "Golf BIOM® H4",
    },
    {
        img: "https://file.hstatic.net/1000143422/file/ec_banner_insider_1200x1200px_3.png",
        title: "Golf BIOM® G5",
    },
];

function EccoGolfComponent() {
    return (
        <Container>
            <Row className="mb-5">
                <h2 className="text-center">ECCO GOLF</h2>
                {banner.map((item, index) => (
                    <Col key={index}>
                        <div className="golf-banner">
                            <img className="golf-banner-img" src={item.img} alt="" />
                        </div>
                            <h4 className="golf-banner-title">{item.title}</h4>
                            <a href="">
                                <Button className="btn-golf-buy">MUA NGAY</Button>
                            </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default EccoGolfComponent;
