import React, { Component } from 'react'
import * as CityService from '../services/cityService'
import * as Sort from '../utility/sorts'

export default class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: [],
      loading: true
    }
  }
//po konvenciji lifecycle metode se pisu izmedju konstruktora i rendera
  componentWillMount() {
    CityService.getAllCitiesLocal()
    .then(data => {
      setTimeout( () =>
        this.setState({
        cities: data || [],
        loading: false
      }), 2000)
    })
  }

  render() {
    const cities = this.state.cities
    .filter(city => city.isActive)
    .sort(Sort.byStatus)
    const greeting = this.props.greeting || 'Hello from List!'
    return (
      <div>
        <h1> {this.state.loading ? 'Loading...' : greeting} </h1>
        <table><tbody>
          <tr>
            <th>_id</th>
            <th>isActive</th>
            <th>city</th>
            <th>status</th>
          </tr>
          {
            cities.map(city => 
              <tr key={city._id} style={{backgroundColor: city.isActive?'papayawhip':'goldenrod'}}>
                <td>{city._id}</td>
                <td>{city.isActive.toString()}</td>
                <td>{city.city}</td>
                <td>{city.status}</td>
              </tr>
            )
          }
        </tbody></table>
      </div>
    )
  }
}