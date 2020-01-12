import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Slider, Grid } from '@material-ui/core';
import './scrubber.css'

// [ 10, 30, 50, 100, 120, 125]

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

const testArr = [10, 50, 200, 400, 450, 500, 800, 1500]
export default class Scrubber extends React.PureComponent {

    static propTypes = {
        maxTime: PropTypes.string.isRequired, 
    }

    static defaultProps = {
        maxTime: '0:00',
    }

    setChange = (event, value) => {
        // this.setState({
        //     prevSelectedTime: this.state.selectedTime,
        //     selectedTime: value,
        // })
        // console.log(value, this.state.prevSelectedTime)
        // case where dx > 0, increasing so we look to the right of the current index
        if (value > this.state.prevSelectedTime) {
          if (this.state.prevIndex < testArr.length - 1) {
            this.setState({
              prevSelectedTime: this.state.selectedTime === value ? this.state.prevSelectedTime : this.state.selectedTime,
              selectedTime: value, 
              prevIndex: this.state.selectedTime >= testArr[this.state.prevIndex + 1] ? this.state.prevIndex + 1 : this.state.prevIndex 
            })
          }
        } else if (value < this.state.prevSelectedTime) {
          console.log("decreasing")
          console.log(this.state.prevIndex)
          if (this.state.prevIndex > 0) {
            this.setState({
              prevSelectedTime: this.state.selectedTime === value ? this.state.prevSelectedTime : this.state.selectedTime, 
              selectedTime: value,
              prevIndex: this.state.selectedTime <= testArr[this.state.prevIndex - 1] ? this.state.prevIndex - 1 : this.state.prevIndex 
            })
          }
        } else {
          this.setState({
            prevSelectedTime: this.state.selectedTime, 
            selectedTime: value, 
          })
        }
    }

    // prevIndex should store the last seen facial recognition index in the time array 
    constructor(props) {
        super(props);

        this.state = {
            maxTime: stringToSec(this.props.maxTime),
            selectedTime: 0,
            prevIndex: -1,
            prevSelectedTime: -1,
        }
    }

    render() {
        const { maxTime, selectedTime } = this.state;

        return (
          <div className='scrubber-wrapper'>
              <React.Fragment>
                  <Typography gutterBottom>Timeline</Typography>
                  <Grid container>
                      <Grid xs={12}/>
                      <Grid xs={12}>
                          <PrettoSlider valueLabelDisplay="off" aria-label="pretto slider" 
                          defaultValue={0} max={maxTime} onChange={this.setChange}/>
                      </Grid>
                      <Grid xs={12}>
                          <Typography style={{margin: '5px 0px 0px 5px'}}>{secToString(selectedTime)}</Typography>
                      </Grid>
                  </Grid>
              </React.Fragment>
            </div>
      );
  }
}
