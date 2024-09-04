import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import numeral from "numeral";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "../../../assets/item.css";

function ItemComponent({ value }) {
    const currentPrice = parseFloat(value.price - (value.price * value.discount) / 100);
    const formattedPrice = function (value) {
        return numeral(value).format("0,0") + "₫";
    };
    console.log();

    return (
        <>
            <Col>
                <Card className="card-item" style={{ width: "22rem", border: "none" }}>
                    <img className="img-item-1" variant="top" src={value.images[0]} style={{ height: "328px" }} />
                    <img className="img-item-2" variant="top" src={value.images[1]} style={{ height: "328px" }} />
                    <Card.Body>
                        <div className="title-like-item">
                            <Card.Title className="item-name">{value.product_name}</Card.Title>
                            <span className="like-item">
                                <FontAwesomeIcon style={{ color: "rgb(217 11 11 / 91%)" }} icon={SolidIcons.faHeart} />
                            </span>
                        </div>
                        <Card.Text className="item-current-price">
                            {formattedPrice(currentPrice)} <span className="item-discount">-{value.discount}%</span>
                        </Card.Text>
                        <Card.Text className="item-old-price">{formattedPrice(value.price)}</Card.Text>
                        <span className="new-item">NEW</span>

                        <Button className="btn-detail-item" variant="secondary">
                            MUA NGAY
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default ItemComponent;
