import {Component, createRef} from "react";
import {Button} from "react-bootstrap";


class Music extends Component{
    state={
        name:""
    }


    render() {

        let text= createRef();

        let addText=()=>{
          this.setState({
              name:text.current.value
          })
        }
        return(

            <div>
                <div><input onChange={addText} ref={text}/></div>
                <div><Button>Add</Button></div>
                <div>{this.state.name}</div></div>

        )
    }
}

export default Music;