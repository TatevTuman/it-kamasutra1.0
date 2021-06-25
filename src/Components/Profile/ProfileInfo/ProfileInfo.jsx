
import s from "./ProfileInfo.module.css"
import {Col, Container, Row} from "react-bootstrap";


const ProfileInfo = () => {
    return (
        <Container>
            <Row  >
                <Col >
                    <img
                        src="https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13347.jpg"
                        alt="avatar" className={s.img} />
                </Col>

                <Col className={s.sss}>
                    <div><h4>Masha Petrova</h4></div>
                    <div><h6>27 years old</h6></div>

                </Col>

            </Row>
        </Container>

    )
}

export default ProfileInfo;