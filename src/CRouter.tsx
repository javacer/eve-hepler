import * as React from "react"
import {Router, Route, Redirect} from "react-router"
import {browserHistory} from "react-router"
import {Main} from "./Main"

interface IRouterProps extends React.ClassAttributes<CRouter> {
}

export class CRouter extends React.Component<IRouterProps> {

    public render() {
        return (
            <Router history={browserHistory}>
                <Route path="/">
                    <Main/>
                </Route>
            </Router>
        )
    }
}