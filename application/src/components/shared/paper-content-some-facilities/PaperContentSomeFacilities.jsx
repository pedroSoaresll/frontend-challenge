import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './paper-content-some-facilities.scss'

export default class PaperContentSomeFacilities extends React.Component {

  render() {

    return (

      <div className="paper-content-some-facilities pt-3 pb-3">

        <div className="area-image d-flex justify-content-center w-100">

          <FontAwesomeIcon className="icon-size text-color-orange" icon={this.props.icon}/>
        </div>

        <p className="area-legend text-center text-size-md text-color-grey mt-3 text-weight-600">{this.props.text}</p>
      </div>
    )
  }
}