import {Component} from 'react'
import axios from 'axios'
export default class App extends Component {
  constructor() {
    super()
    this.change=this.change.bind(this)
    this.state={
      num:0 ,
      users:[]
    }
  }
  change() {
    this.setState({
      num:Math.floor(Math.random()*100)
    })
  }
  async componentDidMount() {
    // console.log("Didmount")
    const {data} = await axios.get("https://api.github.com/users")
    this.setState({
      users:data
    })

  }
  componentDidUpdate() {
    console.log("DidUpdate")
  }
  componentWillUnmount() {
    console.log("will unmount")
  }
  render() {
    return(
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.change}>Change</button>
        <ul>
          {
            this.state.users.map((m) => <li key={m.id}>{m.login}</li>)
          }
        </ul>
      </div>
    )
  }
}

