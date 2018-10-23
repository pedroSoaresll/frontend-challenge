import React from 'react'
import {Button} from '@material-ui/core'

export default class SomeFacilitiesBox extends React.Component {

  render() {

    return (
      <section className="some-facilities-box">
        <h3 className="title-some-facilities">Some Facilities!</h3>

        <div className="some-facilities-content">
          <Button>Ola mundo</Button>
        </div>
      </section>
    )
  }
}