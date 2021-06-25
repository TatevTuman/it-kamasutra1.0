
import {Col, Container, Row} from "react-bootstrap";
import Companion from "./Companion/Companion";
import MessageContainer from "./Message/MessageContainer";



const Dialogs = (props) => {

    return (
        <Container>
            <Row>
                <Col><Companion state={props.state.messagePage.CompanionData}/></Col>
                <Col><MessageContainer state={props.state.messagePage.MessageData}
                              newMessageText={props.newMessageText}
                              dispatch={props.dispatch}

                /></Col>
            </Row>
        </Container>
    )
}
export default Dialogs;
