import axios from "axios"; 
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=> {
const [feedback, setFeedback] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const [FeedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false,
});

useEffect(() => {
    fetchData();
},[]);

const fetchData = async () => {
    const res = await axios.get("/feedback/?_sort=id&_order=desc");
    setFeedback(res.data);
    setIsLoading(false);
}

const addFeedback = async (newFeedback)=> {
    const res = await axios.post("/feedback/", newFeedback);
    setFeedback([res.data, ...feedback]);
}

const deleteFeedBack = async (id) => {
    if(window.confirm("Are you sure you want to delete")){
        await axios.delete(`/feedback/${id}`);
        setFeedback(feedback.filter((item) => item.id !== id));
    }
}

const updateFeedback = async (id, updItem)=> {
    const res = await axios.put(`/feedback/${id}`, updItem);
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...res.data} : item))
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
        isLoading,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext