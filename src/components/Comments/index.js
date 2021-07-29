import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  setName = event => {
    this.setState({name: event.target.value})
  }

  setComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = () => {
    const {name, comment} = this.state

    const color =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
      color,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  updateLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  updateList = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="bg">
        <h1 className="heading">Comments</h1>
        <div className="comments-card">
          <div className="comments-section">
            <p className="comments-section-desc">
              Say something about 4.0 Technologies
            </p>
            <input
              className="comments-section-input"
              type="text"
              placeholder="Your Name"
              onChange={this.setName}
              value={name}
            />
            <textarea
              rows="7"
              cols="40"
              className="comments-section-input"
              placeholder="Your Comment"
              onChange={this.setComment}
              value={comment}
            />
            <button className="button" type="button" onClick={this.addComment}>
              Add Comments
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr className="line" />
        <div className="count-feed">
          <p className="count">{commentsList.length}</p>
          <p className="count-desc">Comments</p>
        </div>
        <ul>
          {commentsList.map(each => (
            <CommentItem
              key={each.id}
              commentDetails={each}
              updateLike={this.updateLike}
              updateList={this.updateList}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
