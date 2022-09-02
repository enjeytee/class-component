import React, {Component} from "react"

// function App (props) {
//     return (
//         <h1>{props.type} component</h1>
//     )
// }
// export default App

class App extends Component {
    render () {
        return (
            <h1>{this.props.type} component</h1>
        )
    }
}
export default App
