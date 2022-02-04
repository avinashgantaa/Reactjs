import {Component} from 'react';
import axios from 'axios';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      users:[],
      loading:false
    }
  }
  componentWillMount(){
    this.setState({
      loading:true
    })
    axios("https://api.randomuser.me/?nat=us&results=5").then(response=>this.setState({users:response.data.results,loading:false}))
  }
  render(){
    return(
      <div className='App'>{!this.state.loading?this.state.users.map(user=><div>
        <h3>{user.name.first}</h3>
        <p>{user.email}</p>
        <hr/>
        </div>):"Loading..."}

      </div>
    )
  }
  
}
export default App;