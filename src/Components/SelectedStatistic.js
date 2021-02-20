import CountUp from 'react-countup';

const SelectedStatistic = ({country, countryData}) => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Confirmed | {country}</h5>
                            <p className="card-text">All Covid-19 Confirmed Cases | {country}</p>
                            <p href="#" className="btn btn-warning">
                            <CountUp
                            start={0}
                            end={countryData.confirmed.value}
                            duration={5}
                            separator="."
                            />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Recovered | {country}</h5>
                            <p className="card-text">Total Number of Recovered People | {country}</p>
                            <p href="#" className="btn btn-success">
                            <CountUp
                            start={0}
                            end={countryData.recovered.value}
                            duration={5}
                            separator="."
                            />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Deaths | {country}</h5>
                            <p className="card-text">All Covid-19 Confirmed Deaths | {country}</p>
                            <p href="#" className="btn btn-danger">
                            <CountUp
                            start={0}
                            end={countryData.deaths.value}
                            duration={5}
                            separator="."
                            />
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default SelectedStatistic
