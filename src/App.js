import './App.css';

import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from './Components/Nav'
import Intro from './Components/Intro'
import Statistics from './Components/Statistics'
import CountryPicker from './Components/CountryPicker'
import About from './Components/About'
import Share from './Components/Share'
import Footer from './Components/Footer'

import {fetchData, fetchGreeceData, modifyFetchedData} from './api'

function App() {
  
  const [data, setData] = useState('')
  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState('')

  useEffect(() => {
    const fetchingData = async () => {
      const fetchedGlobalData = await fetchData()
      const fetchedGreeceData = await fetchGreeceData()
      const modifiedData = await modifyFetchedData(fetchedGlobalData, fetchedGreeceData)

      setData(modifiedData)
    }

    fetchingData()
  }, [])

  useEffect(() => {
    if (!country) return
    const fetchingCountry = async () => {
      const fetchedCountry = await fetchData(`countries/${country}`);
      setCountryData(fetchedCountry)
    }
    
    fetchingCountry()
  }, [country])
    
  const handleSelectCountry = (value) => {
    setCountry(value)
  }

  return (
    <>
      <Router>

        <Nav />  

        <Route path='/' exact component={Intro} />
        <Route path='/' exact render={() => (<Statistics data={data}/>)}/>
        <Route path='/' exact render={() => (<CountryPicker handleSelect={handleSelectCountry} country={country} countryData={countryData}/>)}/>
        
        <Route path="/about" component={About} />
        <Route path="/share" component={Share} />

        <Footer />

      </Router> 
    </>
  );
}

export default App;

