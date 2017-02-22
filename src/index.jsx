import React, {Component} from 'react'

import { PlanetList } from './containers/'
import ReactDOM from 'react-dom'

class App extends Component {
    render () {
        return (
            <div>
                <PlanetList />
            </div>
        )
    }
}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
