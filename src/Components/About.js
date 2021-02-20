import React from 'react'

const About = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">What is Covid-19</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
            <br/><br/>
            Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
            <br/><br/>
            The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 
            <br/><br/>
            The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
            <br/><br/>
            </p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="https://www.who.int/health-topics/coronavirus#tab=tab_1" role="button">Learn more</a>
            </p>
        </div>
    )
}

export default About
