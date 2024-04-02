// rfce
import React from 'react'

function es7() {
  return (
    <div>es7</div>
  )
}

export default es7

//rafce
import React from 'react'

const es7 = () => {
  return (
    <div>es7</div>
  )
}

export default es7

//rce
import React, { Component } from 'react'

export class es7 extends Component {
  render() {
    return (
      <div>es7</div>
    )
  }
}

export default es7

//rconst
constructor(props) {
  super(props)

  this.state = {
     first
  }
}

// clo
console.log('first', first)