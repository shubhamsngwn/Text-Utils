import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

export default function NavBar(props) {

  const navigate = useNavigate();

  const handleDeveloper = () => {
    navigate('/developer');
  }

  const handleHome = () => {
    navigate('/home');
  }

  const handleTextConverter = () => {
    navigate('/');
  }

  return (
    <>
      <nav className={`navbar brdr rounded navbar-expand-lg ${props.mode === "light" ? "border border-dark" : "border border-light"}`}>
        <div className="container-fluid">
          <a className={`navbar-brand active text-${props.mode === "light" ? "dark" : "light"}`} onClick={handleTextConverter}>Text Converter</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar-toggler-icon text-${props.mode === "light" ? "black" : "white"}`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${props.mode === "light" ? "dark" : "light"}`} onClick={handleHome}>Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link active text-${props.mode === "light" ? "dark" : "light"}`} onClick={handleDeveloper}>Developer</a>
              </li>
              <li className="nav-item dropdown">
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className={`form-check-input ${props.mode === "light" ? "border border-dark" : "border border-light"}`} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}



// NavBar.propTypes = {
//   title: PropTypes.string.isRequired, //isRequired: Makes this field required
//   aboutTextUtils: PropTypes.string.isRequired, //isRequired: Makes this field required
// }

//NOT AVAILABLE IN CHROME
//IF WE DON'T PASS ANYTHING FROM TITLE AND ABOUT, THEN THESE DEFAULT VALUES WILL BE PASSED
// NavBar.defaultProps = {
//   title: 'Set title here',
//   aboutTextUtils: 'Set about here'
// }