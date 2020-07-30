import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Quiz from './components/Quiz'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Card from './components/Card.js';
import Footer from './components/Footer.js';

export default class App extends Component {
  
  state = {
    questions:[
      {
        id:1,
        category: "food",
        question: "what is apple?",
        answerOptions: ["omena", "maito", "voi", "sipuri"],
        answer: "omena"
      },
      {
        id:2,
        category: "food",
        question: "what is milk?",
        answerOptions: ["voi", "maito", "omena", "sipuri"],
        answer: "maito"
      },
      {
        id:3,
        category: "food",
        question: "what is butter?",
        answerOptions: ["omena", "maito", "voi", "sipuri"],
        answer: "voi"
      },
      {
        id:4,
        category: "food",
        question: "what is butter?",
        answerOptions: ["omena", "maito", "voi", "sipuri"],
        answer: "voi"
      },
      {
        id:5,
        category: "food",
        question: "what is butter?",
        answerOptions: ["omena", "maito", "voi", "sipuri"],
        answer: "voi"
      },
    ],
    counter: 0,
    quiz: false,
    category: ["food", "sports", "greeting", "animals", "numbers", "food", "sports", "greeting", "animals", "numbers", "sports", "greeting", "animals", "numbers", "food", "sports", "greeting", "animals", "numbers"]
  }



  updateCounter = (e)=>{
    if(e.target.value == this.state.questions[this.state.counter].answer){
      console.log('correct')
    }else{
      console.log(e.target.value, this.state.questions[this.state.counter].answer)
      console.log('incorrect')
    }
    if(this.state.counter < 4){
      this.setState({
        coutner: this.state.counter++
      });
    }
  }

  startQuiz = ()=>{
    this.setState({
      quiz: true
    });
  }

  render() {
    let quiz 
    const cards = this.state.category.map((category)=>(
      <Card category={category} startQuiz={this.startQuiz}></Card>
    ))
    if(!this.state.quiz){
      quiz = 
      <div class="card-columns">
        {cards}
      </div>
    }else{
      quiz = 
      <Quiz quiz={this.state.questions[this.state.counter]} counter={this.state.counter} updateCounter={this.updateCounter}></Quiz>
    }
    return (
      <div>
        <Header></Header>
        <div class="container mt-3">
          <div class="row">
              <div class="">
                  {quiz}
              </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

