import { API_KEY, NASA_URL } from '../helpers/constants.js'
import React, {Component} from 'react'

class PlanetList extends Component {

    state = {
        planetList: this.props.planetList
    };

    static defaultProps = {
        planetData: {},
        planetList:  [
            {
                'id': 0,
                'name': 'Terra',
                'biome': 'Oxygen'
            },
            {
                'id': 1,
                'name': 'Titan',
                'biome': 'Rocky'
            },
            {
                'id': 2,
                'name': 'Atlantis',
                'biome': 'Oceanic'
            }
        ]
    }

    componentWillMount() {
        let searchParams = new URLSearchParams()
        searchParams.append('api_key', API_KEY)
        const URL = encodeURI(NASA_URL + searchParams)

        const getData = fetch(URL)
        getData.then(res => res.json())
        .then(planetData => this.setState({ planetData }))
        .catch(err => console.log(new Error(err)))
    }
    render () {
        const { planetData } = this.state

        if(this.state.planetData) {
            return (
                <div>
                    <h3>{planetData.title}</h3>
                    <img src={planetData.url} width="320" />
                    <p>{planetData.explanation}</p>
                </div>
            )
        }


        return (
            <div>
                fetching data...
            </div>
        )
    }
}

export default PlanetList
