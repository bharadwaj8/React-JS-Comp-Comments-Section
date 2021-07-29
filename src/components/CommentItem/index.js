import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, updateLike, updateList} = props

  const {id, color, name, comment, isLike} = commentDetails

  console.log(formatDistanceToNow(new Date(2020, 1, 2)))
  const likeComment = () => {
    updateLike(id)
  }

  const deleteComment = () => {
    updateList(id)
  }

  const firstLetter = name[0]
  const active = isLike ? 'active' : ''
  return (
    <li className="comments-feed">
      <div className="header">
        <div className={`profile ${color}`}>{firstLetter}</div>
        <p className="desc">{name}</p>
        <p className="time">{formatDistanceToNow(Date.now())} ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="comment-footer">
        <div className="feedback">
          <button className="icon-button" type="button" onClick={likeComment}>
            <img
              src={
                !isLike
                  ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
              }
              alt="like"
              className="icon"
            />
          </button>
          <p className={`like-desc ${active}`}>Like</p>
        </div>
        <button
          className="icon-button"
          type="button"
          testid="delete"
          onClick={deleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="icon"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
