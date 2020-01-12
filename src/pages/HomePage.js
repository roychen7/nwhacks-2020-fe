import React from 'react';
import Button from '@material-ui/core/Button';

import './HomePage.css'

class HomePage extends React.Component {
    render() {
        return (
            <div className='upload-button'>
                <div className='wrapper-class'>
                    <h1 className='header'> Welcome to Therapy Tracker! </h1>
                    <h2 className='below-header'> Upload a video session to get started!</h2>
                </div>
                <Button variant="contained" color="primary">
                    Upload a video session
                </Button>
            </div>
        )
    }
}

export default HomePage