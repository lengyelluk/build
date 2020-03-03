import React from 'react'
import { Form, Button } from 'semantic-ui-react'
// import { commentService } from '../../_services/comment.service'
import './style.css'


export default function AddCommentForm(props) {
    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <Form.Group>
                <Form.Field>
                    <label>User</label>
                    <Form.Input
                        placeholder='User name'
                        onChange={props.handleChange('commentUser')}
                        value={props.user}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Comment</label>
                    <Form.TextArea
                        placeholder='Comment text'
                        onChange={props.handleChange('commentText')}
                        value={props.text}
                    />
                </Form.Field>
            </Form.Group>
            <Button id='add-comment-btn' onClick={props.handleSubmit} >Add Comment</Button>
        </div>
    )
}
