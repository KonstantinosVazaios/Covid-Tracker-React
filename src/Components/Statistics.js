
import Statistic from './Statistic'

const Statistics = ({data}) => {

    return (
        <div className="container mb-5 col-12 d-flex justify-content-center align-items-center">
            <div className="row">
                {
                data
                ?  data.greeceData.map((statistic, i) => {
                        return <Statistic key={i} data={statistic} />
                    })
                :  'Loading'
                }
                {
                data
                ?  data.globalData.map((statistic, i) => {
                        return <Statistic key={i} data={statistic} />
                    })
                : 'Loading'
                }                                  
            </div>
        </div>
    )
}

export default Statistics
