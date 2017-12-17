import * as React from "react"

interface ILayoutProps extends React.ClassAttributes<CLayout> {
}

export class CLayout extends React.Component<ILayoutProps, {}> {
    public render() {
        return (
            <div
                className={"layout"}
            >
                {this.props.children}
            </div>
        )
    }
}
