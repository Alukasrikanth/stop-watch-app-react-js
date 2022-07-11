import {Component} from 'react'

import './index.css'

const clockICon =
  'https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png '

class Stopwatch extends Component {
  state = {isTimerRunning: false, isTimer: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickStartBtn = () => {
    this.timeInterval = setInterval(this.tick, 1000)

    this.setState({isTimerRunning: true})
  }

  tick = () => {
    this.setState(prevTime => ({
      isTimer: prevTime.isTimer + 1,
    }))
  }

  onClickStopBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onClickResetBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, isTimer: 0})
  }

  onRenderSeconds = () => {
    const {isTimer} = this.state
    const seconds = Math.floor(isTimer % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onRenderMinutes = () => {
    const {isTimer} = this.state
    const minutes = Math.floor(isTimer / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const timer = `${this.onRenderMinutes()}:${this.onRenderSeconds()}`
    return (
      <div className="app-container">
        <h1 className="stop-watch-heading">Stopwatch</h1>
        <div className="stop-watch-card-container">
          <div className="timer-img-text-container">
            <img src={clockICon} alt="stopwatch" />
            <p className="timer-text">Timer</p>
          </div>
          <div>
            <h1>{timer}</h1>
          </div>
          <div className="button-container">
            <button
              onClick={this.onClickStartBtn}
              type="button"
              className="button start-button"
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              onClick={this.onClickStopBtn}
              type="button"
              className="button stop-button"
            >
              Stop
            </button>
            <button
              onClick={this.onClickResetBtn}
              type="button"
              className="button reset-button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
