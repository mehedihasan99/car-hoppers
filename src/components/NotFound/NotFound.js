import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <Container>
                <div className='notFound text-center'>
                    <h3>Page Not Found</h3>
                    <p>The page you are looking for doesn't exits</p>
                    <h3>404</h3>
                </div>
            </Container>

        </div>
    );
};

export default NotFound;