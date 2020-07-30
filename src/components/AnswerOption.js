import React, { Component } from 'react'

export default class AnswerOption extends Component {
    render() {
        const answerOptionBtn = {
            // width: "75vw",
            margin: "0 auto",
        }
        const listStyle = {
            listStyleType: "none",
        }
        return (
            <div>
                <li style={listStyle}>                                    
                    <input style={answerOptionBtn} className="btn btn-primary mb-3 btn-block" type="button" value={this.props.answerOption} onClick={this.props.updateCounter}/>
                </li>
            </div>
        )
    }
}
