import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import GeneralPage from "./Components/GeneralPage/GeneralPage";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-navbar"><NavBar/></div>

                <div className="App-content">
                    <Route exact path="/" render={()=><GeneralPage />}/>
                    <Route exact path="/profile:userId?" render={()=><ProfileContainer/>}/>
                    <Route exact path="/dialogs" render={()=><Dialogs/>}/>
                    <Route exact path="/friends" render={()=><FriendsContainer/>}/>
                    <Route exact path="/music" render={()=><Music/>}/>
                    <Route exact path="/news" render={()=><News/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

