import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const footerStyle = {
            height: "10vh",
            backgroundColor: "grey",
        }
        return (
            <div style={footerStyle} class="fixed-bottom mt-5">
                <h1 className="text-center">
                    This is Footer
                </h1>
            </div>
        )
    }
}
