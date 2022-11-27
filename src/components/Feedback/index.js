// Write your React code here.
import {Component} from 'react'

import './index.css'

const Emoji = props => {
  const {EachItem, onclickExpression} = props
  const {name, imageUrl} = EachItem

  const onclickImage = () => {
    onclickExpression()
  }

  return (
    <div>
      <li className="list-style">
        <img
          src={imageUrl}
          alt={name}
          onClick={onclickImage}
          className="image"
        />
        <p>{name}</p>
      </li>
    </div>
  )
}

class Feedback extends Component {
  state = {response: false}

  onclickExpressionImage = () => {
    this.setState(prevState => ({response: !prevState.response}))
  }

  render() {
    const {response} = this.state
    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources

    if (response) {
      return (
        <div className="mainBgContainer">
          <div className="feedbackContainer">
            <img src={loveEmojiUrl} alt="love Emoji" />
            <h1>Thank you</h1>
            <p>We will use you feedback to improve our customer performance</p>
          </div>
        </div>
      )
    }

    return (
      <div className="mainBgContainer">
        <div className="feedbackContainer">
          <h1 className="heading">
            How Satisfied are you with our customer support performance
          </h1>
          <div>
            <ul className="unOrderItems">
              {emojis.map(eachItem => (
                <Emoji
                  key={eachItem.id}
                  EachItem={eachItem}
                  onclickExpression={this.onclickExpressionImage}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
