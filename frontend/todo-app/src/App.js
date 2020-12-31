import React, { Component } from 'react';
// import FirstComponent from './components/learning-examples/FirstComponent' 
// import SecondComponent from './components/learning-examples/SecondComponent' 
// import ThirdComponent from './components/learning-examples/ThirdComponent' 
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp></TodoApp>
        {/* <Counter></Counter> */}
      </div>
    );
  }
}


// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="learningComponents">
//         My Hello Word
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>

//       </div>
//     );
//   }
// }



export default App;