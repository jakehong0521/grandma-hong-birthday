import { useEffect, useState } from 'react'

// component
import CakeContainer from 'components/CakeContainer'
import CardsContainer from 'components/CardsContainer'
import {HashRouter as Router} from "react-router-dom"

// style
import styles from './App.module.css'

export default function App() {
  const [isScrollMsgVisible, setIsScrollMsgVisible] = useState(false)

  return (
    <Router>
      <div className={styles.App}>
        <CakeContainer
          isScrollMsgVisible={isScrollMsgVisible}
          setIsScrollMsgVisible={setIsScrollMsgVisible}
        />
        {isScrollMsgVisible && (
          <CardsContainer/>
        )}
      </div>
    </Router>
  )
}
