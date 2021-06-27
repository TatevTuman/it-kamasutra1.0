import './App.css';

import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import GeneralPage from "./Components/GeneralPage/GeneralPage";
import FriendsContainer from "./Components/Friends/FriendsContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-navbar"><NavBar/></div>

                <div className="App-content">
                    <Route exact path="/" render={()=><GeneralPage />}/>
                    <Route exact path="/profile" render={()=><Profile/>}/>
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

