import {useState, useEffect} from 'react'

import SelectedStatistic from './SelectedStatistic'

import {fetchCountries} from './../api'

const CountryPicker = ({handleSelect, country ,countryData}) => {
    const [countries, setCountries] = useState('')
    
    useEffect(() => {
      const fetchingCountries = async () => {
          const fetchedCountries = await fetchCountries();
          setCountries(fetchedCountries)
      }

      fetchingCountries();
    }, [])

    const  handleSelectedCountry = (e) => {
        handleSelect(e.target.value);
    }

    return (
        <>
            <div className="container col-12" style={{marginTop: "100px", marginBottom: "100px"}}>
                <div className="card border border-info">
                    <h5 className="card-header bg-info text-light">Statistics | Choose Country</h5>
                    <div className="card-body col-12">
                        <div className="form-group">
                            <label className="font-weight-bold pb-3" htmlFor="exampleFormControlSelect1">Select a Country</label>
                            <select onChange={handleSelectedCountry} className="form-control" id="exampleFormControlSelect1">
                            <option defaultValue value="">Choose a Country</option>
                            {
                            countries
                            ?
                            countries.map((country, i) => <option key={i}> {country.name} </option> )
                            :
                            ''
                            }
                            </select>
                        </div>
                        
                        {
                        countryData 
                        ? <SelectedStatistic country={country} countryData={countryData} />
                        : ''
                        }
                        
                    </div>       
                </div>                     
            </div>
        </>
    )
}

export default CountryPicker
