import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'
const Review = (props) => {
    // console.log(props.review);
    const { name, picture, review, id } = props.review;
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" style={{ width: '100px', height: '100px', objectFit: "cover" }} className='user-pic p-2' src={picture} alt='reviewer-image' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>"{review}"</Card.Text>
            </Card.Body>
            <div className='rating'>

            </div>
        </Card>
    );
};

export default Review;