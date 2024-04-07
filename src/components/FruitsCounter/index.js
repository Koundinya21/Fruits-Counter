// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {BananaCount: 0, MangoCount: 0}

  IncreaseMango = () => {
    this.setState(previousState => ({
      MangoCount: previousState.MangoCount + 1,
    }))
  }

  IncreaseBanana = () => {
    this.setState(previousState => ({
      BananaCount: previousState.BananaCount + 1,
    }))
  }

  render() {
    const {BananaCount, MangoCount} = this.state
    return (
      <div className="top-container">
        <div className="container">
          <h1>
            Bob ate <span className="color">{MangoCount}</span> mangoes{' '}
            <span className="color">{BananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="individual-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="Mangoes"
              />
              <button
                className="btn"
                type="button"
                onClick={this.IncreaseMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="individual-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="img"
                alt="Bananas"
              />
              <button
                className="btn"
                type="button"
                onClick={this.IncreaseBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
