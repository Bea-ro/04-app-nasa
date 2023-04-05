import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <figure className="logo-container">
<img src="../public/logo/NASA_logo.svg" alt="Logo NASA" className="logo"/>
</figure>
      <h1 className="page-title">¿Quieres ver la imagen astronómica del día?</h1>
    </div>
  )
}

export default Header