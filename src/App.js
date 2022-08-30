import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'
import Aboutpage from './components/pages/Aboutpage'
import AboutPageIcon from './components/AboutPageIcon'
import { FeedbackProvider } from './context/FeedbackContext'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App(){

    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className='container'>
        <Routes>
        <Route exact path='/' element={
        <>
            <FeedBackForm />    
            <FeedBackStats />  
            <FeedBackList />
            <AboutPageIcon />
        </>
        } />
        <Route exact path='/about' element={<Aboutpage/>}/>
        </Routes>
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App
