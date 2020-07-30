import React, { Component } from 'react'
import Question from './Question'
import AnswerOption from './AnswerOption'
import Counter from "./counter"

export default class Quiz extends Component {

    render() {
        const answerOption = this.props.quiz.answerOptions.map((answerOption)=>(
            <AnswerOption answerOption={answerOption} updateCounter={this.props.updateCounter}></AnswerOption>
        ))
        return(
            <div>
            <Counter counter={this.props.counter}></Counter>
            <Question question={this.props.quiz.question}></Question>
            <ul>
                {answerOption}
            </ul>
            </div>
        )
    }
}
