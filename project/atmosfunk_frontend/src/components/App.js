import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Plane from "./Plane";
import TrackSubmitForm from "./TrackSubmitForm";

const App = () => (
    <React.Fragment>
        <TrackSubmitForm />
        <DataProvider endpoint="/api/track"
            render={data => <Plane trackList={data} />}
        />
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
