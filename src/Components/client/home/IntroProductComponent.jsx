import { Col, Container, Row } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import "../../../assets/IntroProduct.css";

function IntroProductComnponent() {
    return (
        <Container>
            <Row className="mb-5">
                <Col className="w-50">
                    <div className="img-wapper">
                        <a href="">
                            <img
                                className="img-feedback"
                                src="https://file.hstatic.net/1000143422/file/ec_banner_module_feedback_1048x1048_1_faeac8a8d10540f396947435808e861f.png"
                                alt=""
                            />
                            <div className="overlay-bg"></div>
                            <div className="over-lay">
                                <BsInstagram />
                            </div>
                        </a>
                    </div>
                </Col>
                <Col className="w-50">
                    <Row className="mb-4">
                        <Col>
                            <div className="img-wapper">
                                <a href="">
                                    <img
                                        className="img-feedback"
                                        src="https://file.hstatic.net/1000143422/file/banner_module_feedback_1048x1048___1_ea5653f343414931be383a73adcb74f2.png"
                                        alt=""
                                    />
                                    <div className="overlay-bg"></div>
                                    <div className="over-lay">
                                        <BsInstagram />
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col>
                            <div className="img-wapper">
                                <a href="">
                                    <img
                                        className="img-feedback"
                                        src="https://file.hstatic.net/1000143422/file/banner_module_feedback_1048x1048___2_cc6c463634494087b56c02aa0ffb1b8f.png"
                                        alt=""
                                    />
                                    <div className="overlay-bg"></div>
                                    <div className="over-lay">
                                        <BsInstagram />
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="img-wapper">
                                <a href="">
                                    <img
                                        className="img-feedback"
                                        src="https://file.hstatic.net/1000143422/file/banner_module_feedback_1048x1048___4_8a59931da5994cc1a100cbcd9dd50e2c.png"
                                        alt=""
                                    />
                                    <div className="overlay-bg"></div>
                                    <div className="over-lay">
                                        <BsInstagram />
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col>
                            <div className="img-wapper">
                                <a href="">
                                    <img
                                        className="img-feedback"
                                        src="https://file.hstatic.net/1000143422/file/banner_module_feedback_1048x1048___3_7b5c1a6059d94054ada87bb3f8b88228.png"
                                        alt=""
                                    />
                                    <div className="overlay-bg"></div>
                                    <div className="over-lay">
                                        <BsInstagram />
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default IntroProductComnponent;
