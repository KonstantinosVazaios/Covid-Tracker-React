import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Covid Tracker - Greece ✔</h1>
            <p className="lead">Covid-19 Stats | Worldwide</p>
            <p>Daily updates</p>
            <p className="lead">
            <Link to="/about"><span className="btn btn-primary btn-lg" role="button">What is Covid-19?</span></Link>
            </p>
        </div>
    )
}

export default Intro
