

import CounterButton from './CounterButton'
import './Counter.css'



class Counter extends Component {

    //Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)

        this.reset = this.reset.bind(this)

    }

    render() {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <span className="count">{this.state.counter}</span>
            <div>
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
            {/* <Counter by="1"></Counter> */}
          </div>
        );
      }

    increment(by){ //Update state - counter++
        // console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by){ //Update state - counter++
        // console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    reset(){ //Update state - counter++
        // console.log(`increment from parent - ${by}`)
        this.setState(
            () => {
                return {counter: 0}
            }
        );
    }
}


export default Counter