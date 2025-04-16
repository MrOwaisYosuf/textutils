import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const [mode, setMode] = useState('Light Mode');

    const toggleSwitch = () => {
        document.body.classList.remove('bg-light', 'bg-primary', 'bg-danger', 'bg-success', 'bg-warning', 'bg-info', 'bg-dark');
        if (mode === 'Light Mode') {
            setMode('Dark Mode');
            props.toggleMode('dark');
            document.title = 'TextUtils - Dark Mode';
        } else {
            setMode('Light Mode');
            props.toggleMode('light');
            document.title = 'TextUtils - Light Mode';
        }
    }

    const toggleColor = (color) => {
        document.body.classList.remove('bg-light', 'bg-primary', 'bg-danger', 'bg-success', 'bg-warning', 'bg-info', 'bg-dark');
        document.body.classList.add(`bg-${color}`);
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link" aria-current="page" to="/">Home</Link> */}
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/about">About</Link> */}
                        </li>
                    </ul>
                </div>
                <div className="d-flex me-3">
                    <div className="bg-danger rounded mx-2" onClick={() => toggleColor('danger')} style={{ height: '30px', width: '30px' }}></div>
                    <div className="bg-success rounded mx-2" onClick={() => toggleColor('success')} style={{ height: '30px', width: '30px' }}></div>
                    <div className="bg-info rounded mx-2" onClick={() => toggleColor('info')} style={{ height: '30px', width: '30px' }}></div>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" onClick={toggleSwitch} id="switchCheckDefault" />
                    <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                        {mode}
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}