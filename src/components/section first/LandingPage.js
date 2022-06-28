import landingPage from '../../svg/LandingFirst.svg';
import style from './landingPage.module.css';
const LandingPage = () => {
  return (
    <>
      <div className={style.frame81}>
        <div className={style.frame16}>
          <div className={style.frame9}>
            <div className={style.frame8}>
              <div className={style.heading}>
                We Build WEB & MOBILE APPS that user loves!
              </div>
              <div className={style.subHeading}>
                The team of LOGO provides the best services out there for web
                and mobile applications to deliver you the best projects.
              </div>
            </div>
            <div className={style.frame7}>
              <button className={style.button}>Let’s build your Idea</button>
            </div>
          </div>
          <div className={style.image}>
            <img src={landingPage} alt='Landing Page' />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
