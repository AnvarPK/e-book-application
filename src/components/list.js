import { ListGroup } from 'react-bootstrap';

function List({data}) {
    return (
        <ListGroup variant="flush">
            {
                data.map((item)=><ListGroup.Item>{item.title}</ListGroup.Item>)
            }
        </ListGroup>
    )
}

export default List
