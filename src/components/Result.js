import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        const questions = this.props.quizSetList.map((quizSet) =>(
            <div>
            <p>{quizSet.question}</p>
       </div>
        ))
        return (
            <div>
                <h1>
                    {this.props.score}
                    {this.props.counter}
                </h1>
                <h4>{questions}</h4>
            </div>
        )
    }
}
