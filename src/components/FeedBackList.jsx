import FeedBackItem from './FeedBackItem'
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';


function FeedBackList() {
  const {feedback} = useContext(FeedbackContext);


  if(feedback.length === 0){
    return (
      <Card>
        <p>No Feedback Yet!</p>
      </Card>
    )
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FeedBackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}


export default FeedBackList