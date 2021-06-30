import s from "./ProfileInfo.module.css"
import {Col, Container, Row} from "react-bootstrap";
import Spiner from "../../Spiner/Spiner";



const ProfileInfo = (props) => {

    if (!props.oneUserInfo) {
        return <Spiner/>

    }


    return (
        <Container>
            <Row>
                <Col>
                    {props.oneUserInfo.photos.small ? <img
                            src={props.oneUserInfo.photos.small}
                            alt="avatar" className={s.img}/> :
                        <img
                            src="https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13347.jpg"
                            alt="avatar" className={s.img}/>

                    }
                </Col>

                <Col className={s.sss}>

                    <div>
                        {props.oneUserInfo.fullName ? <h4>{props.oneUserInfo.fullName}</h4> : <h4>Masha Petrova</h4>

                        }    </div>

                    <div><h6>27 years old</h6></div>


                </Col>


            </Row>
        </Container>

    )
}

export default ProfileInfo;



