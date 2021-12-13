import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
export const FormList = (props) => {
    // const storeForms = [useSelector(state => state.forms)].sort((a, b) => {
    //     return a.formId > b.formId ? 1 : -1;
    // });
    const storeForms = useSelector(state => state.forms)
    console.log(storeForms.map(form => (console.log('here in lisr',form))))
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Form Name</th>
                    <th>Form url</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {storeForms.length !== 0 ? storeForms.map(form => (
                    <tr>
                        <td>{form.formId}</td>
                        <td>{form.formName}</td>
                        <td>{form.formUrl}</td>
                        <td>{form.createdAt}</td>
                    </tr>)) : ''}
            </tbody>
        </Table>
    );
}  