import styles from './App.module.css'

// component
import CakeContainer from 'components/CakeContainer'
import CardsContainer from 'components/CardsContainer'
import {HashRouter as Router} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div className={styles.App}>
        <CakeContainer/>
        <CardsContainer/>
        <div>Photo book section</div>
      </div>
    </Router>
  )
}
