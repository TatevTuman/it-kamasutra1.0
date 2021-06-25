import './App.css';

import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import GeneralPage from "./Components/GeneralPage/GeneralPage";






function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-navbar"><NavBar/></div>

                <div className="App-content">
                    <Route exact path="/" render={()=><GeneralPage />}/>
                    <Route exact path="/profile" render={()=><Profile
                        state={props.state.profilePage.MyPostData}
                        dispatch={props.dispatch}
                        newPostText={props.newPostText}  />}/>

                    <Route exact path="/dialogs" render={()=><Dialogs state={props.state}
                                                                      newMessageText={props.newMessageText}
                                                                      dispatch={props.dispatch}

                    />}/>
                    <Route exact path="/music" render={()=><Music/>}/>
                    <Route exact path="/news" render={()=><News/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


