import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { BiAbacus } from "react-icons/bi";
import "../../../assets/women.css";
import ItemComponent from "./ItemComponent";

function WomentProductComponent() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/home")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>ECCO Nữ - Mang Phong Cách Châu Âu Trong Sản Phẩm </title>
            </Helmet>
            <div className="banner-page">
                <img
                    style={{ height: "300px", width: "100%" }}
                    src="https://file.hstatic.net/1000143422/collection/ec-banner_collection_1920x400px_4007651ab8474e87a264b4bf2f1d955d_master.png"
                    alt=""
                />
            </div>
            <div className="container-custom">
                <h2 className="text-center my-5">NỮ</h2>
                <Row>
                    <Col>
                        <a href="">
                            <Button className="btn-filter">GIÀY</Button>
                        </a>
                        <a href="">
                            <Button className="btn-filter">PHỤ KIỆN</Button>
                        </a>
                        <a href="">
                            <Button className="btn-filter">COLECTION</Button>
                        </a>
                    </Col>
                </Row>
                <Row className="tools-bar">
                    <Col>
                        <div className="filter-tools d-flex">
                            <div className="size-filter">
                                <Form.Select aria-label="Default select example">
                                    <option>Kích Thước</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className="price-filter">
                                <Form.Select aria-label="Default select example">
                                    <option>Giá</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className="gender-filter">
                                <Form.Select aria-label="Default select example">
                                    <option>Giới tính</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="display-filter d-flex">
                            <Button>
                                <BiAbacus className="mx-2" /> Hiển thị bộ lọc
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="filter-sort-quantity d-flex">
                            <div className="quantity-product-filtered">
                                <p>
                                    Hiển thị <span>35</span> sản phẩm
                                </p>
                            </div>
                            <div className="sort-filter">
                                <Form.Select aria-label="Default select example">
                                    <option>Sắp Xếp</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {data.map((item, index) => <ItemComponent key={index} value={item} />)}
                </Row>
            </div>
        </>
    );
}

export default WomentProductComponent;
