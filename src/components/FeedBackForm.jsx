import {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackForm() {
  const [text, setText] = useState("");
  const [Message, setMessage] = useState("");
  const [IsDisabled, setIsDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  const {addFeedback, FeedbackEdit, updateFeedback} = useContext(FeedbackContext);

  useEffect(() => {
    if(FeedbackEdit.edit === true){
      setText(FeedbackEdit.item.text)
      setIsDisabled(false)
      setRating(FeedbackEdit.item.rating)
    }
  }, [FeedbackEdit]);

  const handleTextChange = (e)=> {
    if(text === ''){
        setMessage(null);
        setIsDisabled(true);
      }
      else if(text !== '' && text.length < 10){
        setMessage('Text Must Be Atleast 10 Characters');
        setIsDisabled(true);
      }
      else{
        setMessage('')
        setIsDisabled(false);
      }
    setText(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(text.length > 10){
      const newFeedback = {
        text,
        rating
      }

      if(FeedbackEdit.edit === true){
        updateFeedback(FeedbackEdit.item.id, newFeedback)
      }else{
        addFeedback(newFeedback);
      }
      setText("");
    }
  }

  return (
    <div>
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How Would You Rate?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write Your Review' value={text}/>
                    <Button type='submit' isDisabled={IsDisabled}>
                        Send
                    </Button>
                </div>
                {Message && <div className='message'>{Message}</div>}
            </form>
        </Card>
    </div>
  )
}

export default FeedBackForm