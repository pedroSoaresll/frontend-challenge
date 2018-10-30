import React from 'react'
import './section-title.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SectionTitle extends React.Component {

  render() {

    return (

      <h3 className="section-title text-size-lg">
        <FontAwesomeIcon icon="chevron-right" className="mr-3 text-color-orange"/>
        {this.props.text}
      </h3>
    )
  }
}