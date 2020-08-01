import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        const cardStyle = {
            // width: "300px"
        }

        return (
            <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"></img>
            <div className="card-body">
                <h4 className="card-title">{this.props.category}</h4>
        <a href={"/" + this.props.category} className="btn btn-primary" onClick={this.props.startQuiz}>start {this.props.category} vocab quiz</a>
            </div>
            </div>
        )
    }
}
