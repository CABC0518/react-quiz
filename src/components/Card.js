import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        const cardStyle = {
            // width: "300px"
        }

        return (
            <div class="card">
            <img class="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"></img>
            <div class="card-body">
                <h4 class="card-title">{this.props.category}</h4>
        <a href={"/" + this.props.category} class="btn btn-primary" onClick={this.props.startQuiz}>start {this.props.category} vocab quiz</a>
            </div>
            </div>
        )
    }
}
