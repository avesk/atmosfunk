import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider"
import Plane from "./Plane"

const App = () => (
    <React.Fragment>
        <DataProvider endpoint="/api/track"
            render={data => <Plane trackList={data} />}
        />
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
