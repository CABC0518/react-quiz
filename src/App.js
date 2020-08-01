import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Quiz from './components/Quiz'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Card from './components/Card.js';
import Footer from './components/Footer.js';
import Result from "./components/Result.js";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
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
          question: "what is melon?",
          answerOptions: ["omena", "maito", "voi", "sipuri"],
          answer: "voi"
        },      {
          id:6,
          category: "food",
          question: "what is melon?",
          answerOptions: ["omena", "maito", "voi", "sipuri"],
          answer: "voi"
        },
      ],
      counter: 1,
      score: 0,
      quiz: false,
      category: ["food", "sports", "greeting", "animals", "numbers"],
      quizSetList: []
    }
  }


  // triigered when users answer each question
  SetNextQuestion = (e)=>{
    // create a list of questions and answer that a user just answered 
    this.setState({
      quizSetList: this.state.quizSetList.concat({"question": this.state.questions[this.state.counter].question, "answerOption": this.state.questions[this.state.counter].answerOptions})
    })
    console.log(this.state.quizSetList)
    // checking user answer and correct answer
    if(e.target.value == this.state.questions[this.state.counter].answer){
      console.log(e.target.value, this.state.questions[this.state.counter].answer)
      console.log('correct')
      this.setState({
        score: this.state.score + 1
      });
    }else{
      console.log(e.target.value, this.state.questions[this.state.counter].answer)
      console.log('incorrect')
    }
    // checking how many questions are served 
    if(this.state.counter < 5){
      console.log(this.state.counter)
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }
  // display Quiz component and shuffle questions order and answer options
  startQuiz = ()=>{
    this.setState({
      quiz: true,
      questions: this.shuffle(this.state.questions)
    });
  }

  shuffle = (array)=>{
    array.sort(() => Math.random() - 0.5);
  }

  render() {
    const cards = this.state.category.map((category)=>(
      <Card category={category} startQuiz={this.startQuiz}></Card>
    ))
    const quizRoute = this.state.category.map((category)=>(
      <Route 
      exact
          path={"/" + category}
          render={props=>(
            <Quiz quiz={this.state.questions[this.state.counter]} counter={this.state.counter} SetNextQuestion={this.SetNextQuestion} score={this.state.score}></Quiz>
          )}    
      />
    )) 

    return (
      <Router>
        <div>
        <Header></Header>
        <Route exact path="/" render={props=>(
        <div className="container mt-3">
        <div className="row">
            <div className="card-columns">
            {cards}
          </div>
        </div>
      </div>
        )} />
        {quizRoute}
        <Route exact path="/result" render={props=>(
          <Result score={this.state.score} counter={this.state.counter} quizSetList={this.state.quizSetList}></Result>
        )}/>
        <Footer></Footer>
      </div>
      </Router>

    )
  }
}

