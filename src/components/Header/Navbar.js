import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Space } from 'antd'
import { AuthContext } from 'context/AuthContext'

const Navbar = () => {

  const { state, dispatch } = useContext(AuthContext)
  const { isAuthenticated } = state;
  // console.log(dispatch);


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    alert("logout clicled")
  }


  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand" >Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active" aria-current="page" >About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contect" className="nav-link active" aria-current="page" >Contect</Link>
              </li>

              <li className="nav-item dropdown">
                {/* <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                {/* Dropdown */}
                {/* </a> */}
                {/* <ul className="dropdown-menu"> */}
                {/* <li><a className="dropdown-item" href="#">Action</a></li> */}
                {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
                {/* <li><hr className="dropdown-divider"/></li> */}
                {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                {/* </ul> */}
              </li>

            </ul>
            <div className="d-flex" >
              <Space>

                {!isAuthenticated ? (
                  <>
                    <Link to="/authentication/login" className="btn btn-outline-success text-light">Login</Link>
                    <Link to="/authentication/register" className="btn btn-outline-info text-light">Register</Link>
                  </>
                ) : (
                  <>
                    <Link className="btn btn-outline-success text-light" onClick={handleLogout}>Logout</Link>
                    <Link to="/dashboard" className="btn btn-outline-info text-light " >Dashboard</Link></>
                )}
              </Space>
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar
