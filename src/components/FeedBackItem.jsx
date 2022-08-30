import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedBackItem({item}) {
  const {deleteFeedBack, editFeedback} = useContext(FeedbackContext);

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => deleteFeedBack(item.id)}>
          <FaTimes color="purple" />
        </button>
        <button className="edit">
          <FaEdit onClick={() => editFeedback(item)} className="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedBackItem.propTypes = {
  item:PropTypes.object.isRequired,
}

export default FeedBackItem