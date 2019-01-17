import React, {Component} from 'react';
import Reviews from './reviews';
import accordion from '../../decorators/accordion';

class ReviewsList extends Component{
    render() {
        return <ul>{this.comments}</ul>;
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            comments,
        } = this.props;

        return comments.map(comments => (
            <li key={comments.id}>
                <Reviews
                    comments={comments}
                    isOpen={comments.id === openItemId}
                    toggleArticle={toggleOpenArticle}
                />
            </li>
        ))
    }
}

export default accordion(ReviewsList)