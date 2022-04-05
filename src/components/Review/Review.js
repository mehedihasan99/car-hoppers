import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'
const Review = (props) => {
    // console.log(props.review);
    const { name, picture, review, id } = props.review;
    return (
        <Card className='text-center'>
            <Card.Img variant="top" style={{ width: '100px', height: '100px', objectFit: "cover" }} className='user-pic p-2' src={picture} alt='reviewer-image' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>"{review}"</Card.Text>
            </Card.Body>
            <Card.Body >
                <FontAwesomeIcon className='text-warning me-2' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='text-warning me-2' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='text-warning me-2' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='text-warning me-2' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='text-warning me-2' icon={faStar}></FontAwesomeIcon>
            </Card.Body>
        </Card>
    );
};

export default Review;