import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Slider, Grid } from '@material-ui/core';

const PrettoSlider = withStyles({
    root: {
      color: '#0099ff',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

const stringToSec = (time) => parseInt(time.substring(time.length-2, time.length)) + 60*parseInt(time);

const secToString = (time) => `${Math.floor(time/60)}:${Math.floor(time%60/10) === 0 ? `0${time%60}`: time%60}`;

export default class Scrubber extends React.PureComponent {

    static propTypes = {
        maxTime: PropTypes.string.isRequired, 
    }

    static defaultProps = {
        maxTime: '0:00',
    }

    setChange = (event, value) => {
        this.setState({
            selectedTime: value,
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            maxTime: stringToSec(this.props.maxTime),
            selectedTime: 0,
        }
    }

    render() {
        const { maxTime, selectedTime } = this.state;


        return (
            <React.Fragment>
                <Typography gutterBottom>Timeline</Typography>
                <Grid container>
                    <Grid xs={1}/>
                    <Grid xs={5}>
                        <PrettoSlider valueLabelDisplay="off" aria-label="pretto slider" 
                        defaultValue={0} max={maxTime} onChange={this.setChange}/>
                    </Grid>
                    <Grid xs={1}>
                        <Typography style={{margin: '5px 0px 0px 5px'}}>{secToString(selectedTime)}</Typography>
                    </Grid>
                </Grid>
            </React.Fragment>
    );
  }
}
