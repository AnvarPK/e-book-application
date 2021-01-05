import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import List from '../components/list';
import DetailBox from '../components/detail-box';

function Home({ pages }) {
    return (
        <>
            <Col xs={12} sm={4} md={3} className="pl-0">
                <List data={pages} />
            </Col>
            <Col xs={12} sm={8} md={9} className="pl-0">
                <DetailBox da/>
            </Col>
        </>
    )
}

const mapStatesToPos = (state) => ({
    pages: state.pages
})

export default connect(mapStatesToPos)(Home);
