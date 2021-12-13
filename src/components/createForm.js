import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import * as  actions from '../state_session/actions';

export const CreateForm = (props) => {

    const storeForms = [useSelector(state => state.forms)].sort((a, b) => {
        return a.formId > b.formId ? 1 : -1;
    });
    const [queArray, setQuestions] = useState([
        // const [queArray, setqueArray] = useState([,
    ]);
    const [formName, setForm] = useState('Enter Form Name');


    const dispatch = useDispatch();


    const handleSubmitForm = (e) => {
        e.preventDefault();
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

        let obj = {
            formName: formName,
            formUrl: `${formName + ':' + storeForms.length}`,
            createdAt: date,
            totalResponces: 1,
            formId: storeForms.length,
            questions: [queArray]
        }
        setQuestions([])
        dispatch(actions.storeform([obj]))
    };

    const handelChangeQuestion = (id, event) => {
        const newQuestion = queArray.map(i => {
            if (id === i.questionId) {
                i[event.target.name] = event.target.value
            }
            return i;
        })



        setQuestions(newQuestion);
    }

    const handleAddQuestions = () => {
        setQuestions([...queArray, { questionId: queArray.length, title: 'Enter title', answerType: 'text', answer: 'your answer' }])
    }



    const handelRemoveQuestion = id => {
        const values = [...queArray];
        values.splice(values.findIndex(value => value.questionId === id), 1);
        setQuestions(values);
    }


    return (
        <div>

            {!props.showList ?
                <div>
                    <h1>Create New Form</h1>
                    <label htmlFor="formName">Form Name</label>
                    <input
                        id="formName"
                        type="text"
                        name="formName"
                        value={formName}
                        onChange={event => setForm(event.target.value)}
                    /><br></br>


                    {queArray.length !== 0 ? <div><button

                        onClick={handleAddQuestions}>
                        Add Another Question
                    </button></div> : <button

                        onClick={handleAddQuestions}
                    >Add Question
                    </button>}
                    <form className="root" >
                        {queArray.length !== 0 ? queArray.map(question => (
                            <div key={question.questionId}>
                                <label htmlFor="title">Title</label>
                                <input
                                    id="title"
                                    name="title"
                                    value={question.title}
                                    onChange={event => handelChangeQuestion(question.questionId, event)}
                                /><br></br>
                                <label htmlFor="answerType">Answer Type</label>
                                <select id="dropdown"
                                    id="answerType"
                                    name="answerType"
                                    value={question.answerType}
                                    onChange={event => handelChangeQuestion(question.questionId, event)}>
                                    <option value="N/A">Select</option>
                                    <option value="text">Text</option>
                                    <option value="chexkbox">Multiselect Checkbox</option>
                                    <option value="radio">Radio</option>
                                </select><br></br>

                                <label htmlFor="answer">Answer</label>
                                {question.answerType === "text" ? <input
                                    id="answer"
                                    name="answer"
                                    value={question.answer}
                                    onChange={event => handelChangeQuestion(question.questionId, event)}
                                /> :
                                    <textarea
                                        id="answer"
                                        name="answer"
                                        value={question.answer}
                                        onChange={event => handelChangeQuestion(question.questionId, event)}
                                    >
                                        Hello there, this is some text in a text area
                                    </textarea>
                                }
                                <br></br>
                                <button

                                    disabled={queArray.length === 1} onClick={() => handelRemoveQuestion(question.questionId)}>
                                    delete
                                </button>
                            </div>
                        )) :
                            ""}

                        {queArray.length !== 0 ? <div>
                            <button

                                onClick={handleSubmitForm}
                            >Save Form
                            </button></div> : ''}
                    </form>

                </div>
                : <div></div>
            }

        </div>

    );
}  