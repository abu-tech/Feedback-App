import {useState, useEffect, useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';


function RatingSelect({select}) {

    const [Selected, setSelected] = useState(10);
    const {FeedbackEdit} = useContext(FeedbackContext);

    useEffect(() => {
      if(FeedbackEdit.edit === true){
        setSelected(FeedbackEdit.item.rating)
      }
    }, [FeedbackEdit])

    const handleChange = (e)=> {
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value);
    }

  return (
    <ul className='rating'>
    {Array.from({ length: 10 }, (_, i) => (
      <li key={`rating-${i + 1}`}>
        <input
          type='radio'
          id={`num${i + 1}`}
          name='rating'
          value={i + 1}
          onChange={handleChange}
          checked={Selected === i + 1}
        />
        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
      </li>
    ))}
  </ul>
  )
}

export default RatingSelect