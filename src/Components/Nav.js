import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="pt-3 pb-3 navbar navbar-expand-sm navbar-light" style={{backgroundColor: '#0CA5FF'}}>
            <Link to="/"><span className="navbar-brand text-light pr-4">CovTraGre⚡</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <Link to="/">
                    <li className="nav-item active">
                        <span className="nav-link text-light pr-4" style={{fontSize: '18px'}} href="#">Home🏠 <span className="sr-only">(current)</span></span>
                    </li>
                    </Link>
                    <Link to="/about">
                    <li className="nav-item">
                        <span className="nav-link text-light pr-4" style={{fontSize: '18px'}}>About🌍</span>
                    </li>
                    </Link>
                    <Link to="/share">
                    <li className="nav-item">
                        <span className="nav-link text-light pr-4" style={{fontSize: '18px'}}>Share👋</span>
                    </li>
                    </Link>
                </ul>
            </div>
            
        </nav>
    )
}

export default Nav
