import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png'

export function Notification() {
    return (
        <div className='Notification'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent"
              dangerouslySetInnerHTML={{
                __html: getLatestNotification(),
              }}></li>
            </ul>
            <button
                style={
                    {
                        float: 'right',
                        marginTop: '-70px',
                        backgroundColor: '#fff',
                        border: 'none',
                    }
                }
                aria-label='close'
                onClick={() => { console.log('Close button has been clicked') }}>
                <img src={closeIcon} alt='close icon' />
            </button>
        </div>
    )
}

// export default Notifications;