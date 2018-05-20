import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: []
    }
  }

  componentWillMount() {
    fetch('/cities')
    .then(data => {
      this.setState({
        cities: [...data]
      })
    })
  }

  render() {
    const cities = this.state.cities
    return (
      <div>
        <h1> Hello from List! </h1>
        <table><tbody>
          <tr>
            <th>_id</th>
            <th>isActive</th>
            <th>city</th>
            <th>status</th>
          </tr>
          {
            cities.map(city => 
              <tr style={{backgroundColor: 'papayawhip'}}>
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