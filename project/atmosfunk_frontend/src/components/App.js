import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import Plane from "./Plane";
import TrackSubmitForm from "./TrackSubmit/TrackSubmitForm";

const endp = "/api/track/";
const App = () => (
    <React.Fragment>
        <AppContainer endpoint={endp} />
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
