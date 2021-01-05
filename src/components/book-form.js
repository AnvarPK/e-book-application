import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function BookForm() {
    const [formData, setFormData] = useState({
        pageId: null,
        title: null,
        content: null
    })
    const onChangeHnadler = (state, value) => {
        setFormData({
            ...formData,
            [state]:value
        });
    }
 const submitHndler = function(e){
     e.stopPropagation();
 }
    

    return (
        <Form >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Page Title</Form.Label>
                <Form.Control type="text" value={formData.title} placeholder="Page Title"
                    onChange={(e) => {
                        onChangeHnadler(e.target.name, e.target.value);
                    }} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <CKEditor
                    editor={ClassicEditor}
                    data={formData.content}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();

                        onChangeHnadler('content', data);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </Form.Group>
            <Button variant="primary" type="button" onClick={submitHndler}>
                Submit
            </Button>
        </Form>
    )
}

export default BookForm
