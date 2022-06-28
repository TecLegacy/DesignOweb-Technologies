import React from 'react';
import style from './header.module.css';
import logo from '../../svg/Logo.svg';
const Header = () => {
  return (
    <React.Fragment>
      <div className={style.container}>
        <div className={style.navBar}>
          <div className={style.logo}>
            <img src={logo} alt='Logo' />
          </div>
          <div className={style.listStyle}>
            <div className={style.listItem}>
              <div className={style.awards}>Awards</div>
              <div className={style.work}>Our Work</div>
              <div className={style.button}>
                <button className={style.buttonStyle}>Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
