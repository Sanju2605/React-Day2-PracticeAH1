import React, { Component } from 'react'

export class Book extends Component {
  render() {
    return (
      <div><h1>Book : {this.props.name} Written by : {this.props.author}</h1></div>
    )
  }
}

export default Book