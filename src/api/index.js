import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (params = '') => {
    const {data: {confirmed, recovered, deaths}} = await axios.get(`${url}/${params}`)

    const modifiedData = {
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths
    }
    return modifiedData
}


export const fetchGreeceData = async () => {
    const {data: {confirmed, recovered, deaths}} = await axios.get(`${url}/countries/greece`);
    
    const modifiedData = {
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths
    }
    return modifiedData
}


export const fetchCountries = async () => {
    const {data: {countries}} = await axios.get(`${url}/countries`);
    return countries
}


export const modifyFetchedData = async (global, greece) => {
    const modifiedData = {
        globalData: [
            {
                title: 'Confirmed | Global',
                description: 'All Covid-19 Confirmed Cases | Global',
                value: global.confirmed.value,
                color: 'warning'
            },
            {
                title: 'Recovered | Global',
                description: 'Total Number of Recovered People | Global',
                value: global.recovered.value,
                color: 'success'
            },
            {
                title: 'Deaths | Global',
                description: 'All Covid-19 Confirmed Deaths | Global',
                value: global.deaths.value,
                color: 'danger'
            },
        ],
        greeceData: [
            {
                title: 'Confirmed | Greece',
                description: 'All Covid-19 Confirmed Cases | Greece',
                value: greece.confirmed.value,
                color: 'warning'
            },
            {
                title: 'Recovered | Greece',
                description: 'Total Number of Recovered People | Greece',
                value: greece.recovered.value,
                color: 'success'
            },
            {
                title: 'Deaths | Greece',
                description: 'All Covid-19 Confirmed Deaths | Greece',
                value: greece.deaths.value,
                color: 'danger'
            },
        ]
    }
    return modifiedData
}
