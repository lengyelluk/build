import { Icon } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import {
    AddCommentForm,
    Allowed,
    Availability,
    CommentsListPage,
    Flatmates,
    Location,
    PreferredFlatmates,
    Price
} from '../../components'

import { cardService } from '../../_services/card.service'
import { commentService } from '../../_services/comment.service'
import { withRouter } from "react-router-dom";

//import commentsData from '../../assets/data/testCommentsData.json'
//import data from '../../assets/data/testData.json'
import photo from '../../assets/images/flat.jpg'

import './style.css'

class FlatDetailScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            currentCardId: props.match.params.cardId,
            card: {},
            comments: [],
            commentText: '',
            commentUser: '',
        }
        this.returnToCardList = this.returnToCardList.bind(this)
        this.upvoteCard = this.upvoteCard.bind(this)
    }

    async componentDidMount() {
        const data = await cardService.getById(this.state.currentCardId);
        const commentsData = await commentService.getAllCommentsByCardId(this.state.currentCardId);
        this.setState({
            card: data,
            comments: commentsData,
        })
    }

    returnToCardList() {
        this.props.history.push('/cards')
    }

    async upvoteCard() {
        const cardWithUpvote = await cardService.upvoteCard(this.state.currentCardId)
        this.setState({
            card: cardWithUpvote
        })
    }

    handleCommentChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    handleCommentFormSubmit = async e => {
        e.preventDefault()

        const comment = {
            cardId: this.state.card._id,
            user: this.state.commentUser,
            text: this.state.commentText
        }

        await commentService.saveComment(comment)

        const allComments = await commentService.getAllCommentsByCardId(this.state.currentCardId);
        this.setState({
            comments: allComments,
        })
    }
    render() {
        return (
            <>
                <h1 className="title">{this.state.card.title}</h1>
                <div className='card-menu-center'>
                    <button id='back-button' onClick={this.returnToCardList}>GO BACK TO THE LIST</button>
                </div>
                <div className='card-menu-right'>
                    <button id='upvote' onClick={this.upvoteCard}><Icon fitted name='thumbs up outline' size='big' /></button>
                    <span className='upvote-number'>Number of Upvotes: {this.state.card.upvotes}</span>
                </div>

                <div className="card-grid">
                    <img src={photo} className='card-image-detail' alt="flat" />
                    <div className='desc-container'>
                        {this.state.card.price && <Price price={this.state.card.price.value}
                                                         currency={this.state.card.price.currency}  /> }
                        <Location street={this.state.card.street} district={this.state.card.district} />

                        {this.state.card &&
                            <Flatmates male={this.state.card.flatmatesMale}
                                female={this.state.card.flatmatesFemale} />
                        }
                        {this.state.card &&
                            <PreferredFlatmates
                                male={this.state.card.prefFlatmatesMale}
                                female={this.state.card.prefFlatmatesFemale}
                                couple={this.state.card.prefFlatmatesCouple} />
                        }
                        <Availability availability={this.state.card.availabilityDate} stay={this.state.card.minStay} />
                        <Allowed smoking={this.state.card.smokingAllowed} pet={this.state.card.petAllowed} />
                    </div>
                </div>
                <CommentsListPage commentsList={this.state.comments} />
                <AddCommentForm
                    handleChange={this.handleCommentChange}
                    handleSubmit={this.handleCommentFormSubmit}
                    cardId={this.state.card._id}
                    user={this.state.commentUser}
                    text={this.state.commentText}
                />
            </>
        )
    }
}
export default FlatDetailScreen
export const FLAT_DETAIL = "/cards/:cardId"