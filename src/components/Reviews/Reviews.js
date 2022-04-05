import React from 'react';
import { Container } from 'react-bootstrap';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <Container>
            <div className='reviews-container mb-5'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </Container>
    );
};

export default Reviews;