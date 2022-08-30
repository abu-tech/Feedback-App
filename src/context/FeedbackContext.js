import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=> {
const [feedback, setFeedback] = useState([
    {
        id: 1,
        text:'This is item from context',
        rating: 8,
    },
    {
        id: 2,
        text:'This is item from context',
        rating: 5,
    },
    {
        id: 3,
        text:'This is item from context',
        rating: 10,
    },
]);

const [FeedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false,
});

const addFeedback = (newFeedback)=> {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
}

const deleteFeedBack = (id) => {
    if(window.confirm("Are you sure you want to delete")){
        setFeedback(feedback.filter((item) => item.id !== id));
    }
}

const updateFeedback = (id, updItem)=> {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
}

const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true,
    })
}

    return <FeedbackContext.Provider value={{
        feedback,
        FeedbackEdit,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext