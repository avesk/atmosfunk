import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Plane from "./Plane";
import TrackSubmitForm from "./TrackSubmit/TrackSubmitForm";

const endp = "/api/track/";
const App = () => (
    <React.Fragment>
        <TrackSubmitForm action={endp} />
        <DataProvider endpoint={endp}
            render={data => <Plane trackList={data} />}
        />

    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
