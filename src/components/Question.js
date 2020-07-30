import React, { Component } from 'react'

export default class Question extends Component {
    render() {
        return(
        <h1 class="text-center mb-4">{this.props.question}</h1>
        )
    }
}
