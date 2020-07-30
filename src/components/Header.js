import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const headerStyle = {
            height: "10vh",
            backgroundColor: "grey",
        }
        return (
            <div style={headerStyle}>
                <h1 className="text-center">
                    This is Header
                </h1>
            </div>
        )
    }
}
