import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AnswerOption extends Component {
    render() {
        const answerOptionBtn = {
            width: "60vw",
            margin: "0 auto",
        }
        const listStyle = {
            listStyleType: "none",
        }
        let answerOption;
        if(this.props.counter === 5){
            answerOption = <Link to="/result" counter={this.props.counter}>
                <input style={answerOptionBtn} className="btn btn-primary mb-3 btn-block" type="button" value={this.props.answerOption} score={this.props.score} onClick={this.props.SetNextQuestion}/>
                </Link> 
        }else{
            answerOption = <input style={answerOptionBtn} className="btn btn-primary mb-3 btn-block" type="button" value={this.props.answerOption} onClick={this.props.SetNextQuestion}/>
        }
        return (
            <div>
                <li style={listStyle}>
                    {answerOption}                                   
                </li>
            </div>
        )
    }
}
