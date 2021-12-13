
export const storeform = (form) => {
    return (dispatch,getState) =>{
        setTimeout(()=>{
            console.log('hi state',getState())
            let formArr = JSON.parse(sessionStorage.getItem("formArray") ?? "[]") ;
            formArr = [...formArr,...form]
            sessionStorage.setItem("formArray",JSON.stringify(formArr));
            dispatch(asyncCreateForm(form));
        },10000)
    }
    }

    
export const asyncCreateForm = (form) => {
    return {
        type : "asyncCreateForm",
        payload : form
    }
    }