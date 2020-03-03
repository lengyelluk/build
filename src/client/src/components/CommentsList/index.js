import React from 'react'
import './style.css'

export default function CommentsList(props) {
    return (
        <>
            <h3>Comments:</h3>
            {props.comments.map((comment, key) => (
                <div className="comment" key={key}>
                    <h4>{comment.user}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
        </>
    )
}