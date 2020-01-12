import React from 'react';
import Button from '@material-ui/core/Button';
import './HomePage.css'


class HomePage extends React.Component {

    render() {
        return (
            <body className='top-body'>
                <body>
                    <div className='upload-button'>
                        <div>
                            <h1> Welcome to Therapy Tracker! </h1>
                            <h2> Upload an MP4 to get started!</h2>
                        </div>
                        <Button variant="contained" color="primary">
                            Upload a session (.mp4)
                        </Button>
                        <div >
                        <text> Powered by Google TM</text>
                        </div>
                    </div>
                </body>
            </body>
        )
    }
}

export default HomePage