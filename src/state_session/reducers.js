
const initialState = {
    forms: [{
        formName: 'dummy form',
        formUrl: 'something.html',
        createdAt: 'today',
        totalResponces: 1,
        formId: 0,
        questions: [
            // questionId : 0,
            // title: 'dummy Question',
            // answerType: 'text',
            // answer: ['yes'],
        ]

    }]
}

export default function formReducer(state = initialState, action) {
    console.log('inside reducer');
    switch (action.type) {
        case "asyncCreateForm":
            
                return {
                    forms: [...state.forms,...action.payload]
                }
            
        // case "deleteQuestion":
        //     let store = {
        //         ...state.users.filter((u,i) => i!=action.payload) 
        //      }
        //     return store


        default:
            return state;
    }
}

