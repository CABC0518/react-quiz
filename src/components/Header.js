import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const headerStyle = {
            height: "10vh",
            backgroundColor: "grey",
            width: "100%",
            textAlign: "center"
        }
        const menuStyle = {
            // padding: "1em",
            textAlign: "center",
            display:"inline-block",
            textDecoration: "none",
            margin: "0 auto",
        }
        return (
            <div style={headerStyle}>
                <h1 className="text-center">
                    This is Header
                </h1>
                <ul>
                    <li><a href="/" className="" style={menuStyle}>Home</a></li>
                </ul>
                
            </div>
        )
    }
}
