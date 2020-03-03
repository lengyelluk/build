import React from 'react'
// import CommentsList from '../CommentsList'
import './style.css'


export default function CommentsListPage(props) {
	const comments = Array.from(props.commentsList)
	console.log('COMMENTS:', comments)
	if (comments.length == 0) {
		return <h3 className='comments-heading'>No Comments</h3>
	} else {
		return (
			<>
				<h3 className='comments-heading'>Comments:</h3>
				{comments.map((comment, key) => (
					<div className="comment" key={key}>
						<h4>{comment.user}</h4>
						<p>{comment.text}</p>
					</div>
				))}
			</>
		)
	}
}