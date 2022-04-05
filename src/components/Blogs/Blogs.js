import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Blogs.css'
const Blogs = () => {
    return (
        <Container className='blogs-container mb-5'>
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>What is Context API</Card.Title>
                        <Card.Text>
                            The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                            <h6>How to use Context API?</h6>
                            <ul>
                                <li>Create a folder under your app root named contexts</li>
                                <li>Create a file name</li>
                                <li>import and create a context </li>
                                <li>Create a component that will wrap the provider named</li>
                                <li>Create a higher order component to consume the context named.</li>
                                <li>Finally export them</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>what is Semantic tag</Card.Title>
                        <Card.Text>
                            Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.
                            Elements such as "header", "footer", "section" and "article "are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Differences between Inline vs Block elements</Card.Title>
                        <Card.Text>
                            <h5 className='text-center'>Inline</h5>
                            <ul>
                                <li>Inline elements do not respect the top and bottom margins but only the left and right and also consider the padding.</li>
                                <li>Inline elements are stored inside block elements and, therefore, do not require any particular space.</li>
                            </ul>
                            <h5 className='text-center'>Block</h5>
                            <ul>
                                <li>Block elements are a kind of blocks where there are many elements in a line itself. While inline elements take up the space of an entire line and there will be only one line within the space width.</li>
                                <li>Block elements cannot break among the lines.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Blogs;