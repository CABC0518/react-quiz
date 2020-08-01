import React, { Component } from 'react'

export default class Question extends Component {
    render() {
        return(
        <h1 className="text-center mb-4">{this.props.question}</h1>
        )
    }
}
