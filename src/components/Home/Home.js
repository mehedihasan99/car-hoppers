import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Container >
                <div className="car-container">
                    <div className="car-text">
                        <h2 className='text-uppercase'>Find <span style={{ color: '#004B94' }}>the Car</span> You Want</h2>
                        <h2 className='text-uppercase'>Your Way</h2>
                        <p className='mt-4 fs-5'>You’ll discover in-depth resources and guidance that’ll help you navigate every step of your car buying process.</p>
                        <Button className='text-white car-btn mt-3 px-3 py-2'>Click Here</Button>
                    </div>
                    <div className="car-img">
                        <img src='car.jpg' alt="" />
                    </div>
                </div>
                <div className="homePage-customer-reviews text-center mt-3">
                    <h2>Customer Reviews</h2>
                </div>
                <div className='reviews-btn mb-3'>
                    <Link className='btn' to='/reviews'>See All Reviews</Link>
                </div>
            </Container>
        </div>
    );
};

export default Home;