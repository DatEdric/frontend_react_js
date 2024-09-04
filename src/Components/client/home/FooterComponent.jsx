import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import "../../../assets/footer.css"; // Đảm bảo bạn có file CSS để tạo kiểu cho footer

const FooterComponent = () => {
    return (
        <>
            <div className="send-mail my-5">
                <Container className="">
                    <Row className="newsletter">
                        <Col md={6} className="d-inline-flex align-items-center">
                            <div className="icon-mail">
                                <HiOutlineEnvelope />
                            </div>
                            <div className="note-mail">
                                <h4>Đăng ký email để nhận ngay các thông tin mới nhất từ ECCO</h4>
                                <a href="#" className="privacy-policy">
                                    Chính sách bảo mật
                                </a>
                            </div>
                        </Col>
                        <Col className="align-items-end">
                            <Form>
                                <Form.Control type="email" placeholder="Email" className="input-mail mr-2" />
                                {/* <Button variant="primary">Đăng ký</Button> */}
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row className="contact-info">
                    <Col md={3}>
                        <h5>Thông tin liên hệ</h5>
                        <p>Công ty Cổ phần Đầu tư - Thương Mại Hiệp Bình</p>
                        <p>Địa chỉ: Số 100 Nguyễn Văn Trỗi, Phường 8, Quận Phú Nhuận, TPHCM</p>
                        <p>Số ĐKKD 0304198785</p>
                        <p>Thời gian làm việc: Thứ 2 - thứ 6, 8.00 - 17.00</p>
                        <p>Email: eccocare@tbretail.vn</p>
                        <p>
                            Hotline: <AiOutlinePhone /> (028) 39 255 200
                        </p>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={2}>
                        <h5>Hỗ trợ khách hàng</h5>
                        <ul>
                            <li>Hỏi Đáp</li>
                            <li>Hướng dẫn đặt hàng</li>
                            <li>Phương thức thanh toán</li>
                            <li>Hướng dẫn chăm sóc sản phẩm</li>
                            <li>Hệ Thống Cửa Hàng</li>
                            <li>ECCO Toàn Cầu</li>
                        </ul>
                    </Col>

                    <Col md={2}>
                        <h5>Giới thiệu</h5>
                        <ul>
                            <li>Khám phá ECCO</li>
                            <li>Di sản ECCO</li>
                            <li>Lịch sử thương hiệu</li>
                            <li>Công nghệ đột phá</li>
                            <li>Phát triển bền vững</li>
                        </ul>
                    </Col>
                </Row>

                <Row className="social-media">
                    <Col className="text-center">
                        <h5>Kết nối với ECCO</h5>
                        <a href="#">
                            <FaFacebook />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaYoutube />
                        </a>
                    </Col>
                </Row>

                <Row className="footer-bottom">
                    <Col className="text-center">
                        <p>Copyright © 2011 - 2021 TBSRetail - Một thành viên của TBSGroup | All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FooterComponent;
