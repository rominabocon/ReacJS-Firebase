import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container className="pt-5">
                <Row className="text-center">
                    <Col>
                        <p className="fs-5">Roxana Patisserie</p>
                        <p>Los pedidos se toman con al menos 72 hs de anticipacion. </p>
                    </Col>
                    <Col>
                        <p className="fs-5">Social Network</p>
                        <ul className="d-flex text-center justify-content-center">
                            <li className="list-unstyled  ms-2 me-2"><a className="linksIcons instagram" href="https://www.instagram.com/roxanapatisserie/"><i className="fab fa-instagram"></i></a></li>
                            <li className="list-unstyled  ms-2 me-2"><a className="linksIcons facebook" href="https://www.facebook.com/roxanapatisserie"><i className="fab fa-facebook"></i></a></li>
                            <li className="list-unstyled  ms-2 me-2"><a className="linksIcons whatsapp" href="https://api.whatsapp.com/send/?phone=393516791977&text&app_absent=0"><i className="fab fa-whatsapp"></i></a></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="m-1"/>
            </Container>
            <p className="text-center pt-3 m-0 copyright">Copyright Roxana Motti - 2021. Todos los derechos reservados. E-Commerce creado por Romina Bocon.</p>. 
        </footer>
    )
}

export default Footer;