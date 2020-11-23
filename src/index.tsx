import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/Hello";

ReactDOM.render(
    <React.StrictMode>
        <Hello compiler="TypeScript" framework="React" />
    </React.StrictMode>,
    document.getElementById("root")
);