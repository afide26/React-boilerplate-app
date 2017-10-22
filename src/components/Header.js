import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from './../actions/Auth'

export const Header = ({startLogout})=>(
  <header className="header"> 
    <div className="content-container">
      <div className="header__content">
        <Link to="/dashboard"className="header__title">
          <h1>BoilerPlate</h1>
        </Link>  
        <button className="button logout-button" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch)=>(
  {
    startLogout: ()=> dispatch(startLogout())
  }
)
export default connect(undefined, mapDispatchToProps)(Header);