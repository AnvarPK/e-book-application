import { connect } from 'react-redux';
import BookForm from '../../components/book-form';
import { Col } from 'react-bootstrap';
import { addPageData } from '../../redux/actions/pages';
import { useHistory } from "react-router-dom";


function BookAdd({ dispatch }) {
    const history = useHistory();

    const onSubmitHndler = (data) => {
        dispatch(addPageData(data))
        history.push('/');
    }

    return (
        <Col >
            <BookForm submitHandler={onSubmitHndler} />
        </Col>
    )
}


export default connect()(BookAdd);
