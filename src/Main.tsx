import * as React from "react"

interface IMainProps extends React.ClassAttributes<Main> {
}

export class Main extends React.Component<IMainProps, {}> {
    public render() {
        return (
            <div
                className={"content"}
            >
                Eve online helper 0.0.1
            </div>
        )
    }
}
