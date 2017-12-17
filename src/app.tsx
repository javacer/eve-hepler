/// <reference path="../node_modules/typescript/lib/lib.dom.d.ts" />
/// <reference path="../node_modules/typescript/lib/lib.es2016.d.ts" />
/// <reference path="../node_modules/@types/lodash/index.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/@types/react/index.d.ts" />

import * as React from "react"
import * as ReactDOM from "react-dom"
import {CRouter} from "./CRouter"

ReactDOM.render(
    React.createElement(
        CRouter
    ),
    document.getElementById("application")
)