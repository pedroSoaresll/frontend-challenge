import React from 'react'
import './search-top.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SearchTop extends React.Component {

  render() {

    return (
      <div className="search-top d-flex align-items-center p-4">
        <div className="area-icon mr-4">
          <FontAwesomeIcon icon="search" color="#FAA71B"/>
        </div>
        <input type="text" name="search" />
      </div>
    )
  }
}