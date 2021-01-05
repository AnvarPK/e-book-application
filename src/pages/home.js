import React from 'react'
import { Col } from 'react-bootstrap';
import List from '../components/list';
import DetailBox from '../components/detail-box';

function Home() {
    return (
        <>
            <Col xs={12} sm={4} md={3} className="pl-0">
                <List />
            </Col>
            <Col xs={12} sm={8} md={9} className="pl-0">
                <DetailBox />
            </Col>
        </>
    )
}

export default Home
