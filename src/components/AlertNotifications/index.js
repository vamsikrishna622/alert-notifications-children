// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="alert-heading">Alert Notifications</h1>
          <Notification>
            <AiFillCheckCircle className="button success-icon" />
            <div className="description-container">
              <h1 className="success heading">Success</h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
          </Notification>
          <Notification>
            <RiErrorWarningFill className="button error-icon" />
            <div className="description-container">
              <h1 className="error heading">Error</h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </Notification>
          <Notification>
            <MdWarning className="button warning-icon" />
            <div className="description-container">
              <h1 className="warning heading">Warning</h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </Notification>
          <Notification>
            <MdInfo className="button info-icon" />
            <div className="description-container">
              <h1 className="success heading">Info</h1>
              <p className="description">
                Anyone on the internet can view these files
              </p>
            </div>
          </Notification>
        </div>
      </div>
    )
  }
}

export default AlertNotifications
