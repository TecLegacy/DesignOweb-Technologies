import style from './footer.module.css';
import logo from '../../svg/Logo.svg';
import Facebook from '../../svg/facebook.svg';
import Basketball from '../../svg/basketball.svg';
import Indeed from '../../svg/indeed.svg';
import Instagram from '../../svg/instagram.svg';

const Footer = () => {
  return (
    <>
      <div className={style.frame160}>
        <div className={style.frame159}>
          <div className={style.frame150}>
            <img className={style.logos} src={logo} alt='Logo' />
            <div className={style.group}>
              <div className={style.copyRight}>
                <span className={style.copy}>&#174;</span>
                <span className={style.heading}>LOGO</span>
                <div className={style.subHeading}>TECHNOLOGIES</div>
              </div>
            </div>
          </div>
          <div className={style.frame84050}>
            <div className={style.frame134}>
              <div className={style.textHeading}>STAFF AUGMENTATION</div>
              <div className={style.textSubHeading}>
                Hire App Developers Hire Web Developers Hire Full Stack
                Developers Hire JS Developers
              </div>
            </div>
            <div className={style.frame157}>
              <div className={style.frame134}>
                <div className={style.textHeading}>WHO WE ARE</div>
                <div className={style.textSubHeading}>
                  About Us Founder Testimonials CareersHIRING FAQ’s Contact Us
                </div>
              </div>
            </div>
            <div className={style.frame139}>
              <div className={style.frame134}>
                <div className={style.textHeading}>DEDICATED HIRING</div>
                <div className={style.textSubHeading}>
                  Looking for hire for long term or full-time assignment
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.frame249} />
        <div className={style.frame145}>
          <div className={style.frame140}>
            <div className={style.copyRight}>
              <span>&#169;</span>
              Copyright: 2022 Logo Technologies /All Rights Reserved
            </div>
          </div>
          <div className={style.frame141}>
            <div className={style.map}>Site Map</div>
            <div className={style.terms}>Terms Of Use</div>
            <div className={style.policy}>Privacy Policy</div>
          </div>
          <div className={style.frame152}>
            <img src={Facebook} alt='facebook logo' />
            <img src={Indeed} alt='indeed logo' />
            <img src={Basketball} alt='basketBall logo' />
            <img src={Instagram} alt='instagram logo' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
