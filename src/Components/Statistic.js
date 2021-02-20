import CountUp from 'react-countup';

const Statistic = ({data}) => {
    return (
        <> 
            <div className="col-lg-4 col-md-6 col-sm-12 pt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        <p href="#" className={`btn btn-${data.color}`}>
                        <CountUp
                        start={0}
                        end={data.value}
                        duration={5}
                        separator="."
                        />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistic
