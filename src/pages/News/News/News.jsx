import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    
    return (
        <div>
            <h4 className='mt-3'>Dragon News</h4>
            <Card>
                <Card.Img variant="top" className='px-3 pt-3' src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft /> All News in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInsights />
        </div>
    );
};

export default News;