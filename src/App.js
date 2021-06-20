import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";





function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-header"><Header/></div>
                <div className="App-navbar"><NavBar/></div>

                <div className="App-content">
                    <Route path="/profile" render={()=><Profile state={props.state.MyPostData} addPost={props.addPost} />}/>
                    <Route path="/dialogs" render={()=><Dialogs state={props.state}/>}/>
                    <Route path="/music" render={()=><Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
