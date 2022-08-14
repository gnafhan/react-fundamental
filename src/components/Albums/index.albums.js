import React from 'react'
import { Container } from 'react-bootstrap';
import Collection from './collection.album';

const Images = ({title, description}) => {
    return (
        <React.Fragment>
            <Container className='mt-2'>
                <h1>{title}</h1>
                <i>{description}</i>
                <Collection/>
            </Container>
        </React.Fragment>
    )
}

export default Images;