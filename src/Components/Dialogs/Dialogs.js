import {Col, Container, Row} from "react-bootstrap";
import Companion from "./Companion/Companion";
import Message from "./Message/Message";



const Dialogs = (props) => {

    return (
        <Container>
            <Row>
                <Col><Companion state={props.state.CompanionData}/></Col>
                <Col><Message state={props.state.MessageData} /></Col>
            </Row>
        </Container>
    )
}
export default Dialogs;




