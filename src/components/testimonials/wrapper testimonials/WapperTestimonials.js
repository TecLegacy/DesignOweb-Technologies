import style from './wapperTestimonials.module.css';
import Clutch from '../../../images/clutch.png';
import Iso from '../../../images/iso.png';

import ReUseTesti from '../re useable testimonials/ReUseTesti';
import Award from './Award';
const WapperTestimonials = () => {
  return (
    <>
      <div className={style.frame63}>
        <div className={style.frame62}>
          <div className={style.frame61}>
            <div className={style.frame53}>
              <img src={Clutch} alt='Clutch company logo' />

              <div className={style.frame52}>
                <div className={style.heading}>
                  The most promising mobile apps solution providers globally
                </div>
                <div className={style.subHeading}>
                  We have been recognized as a market leader globally, post a
                  rigorous evaluation of factors presence & client experience.
                </div>
              </div>
            </div>
            <div className={style.frame54}>
              <img src={Iso} alt='Clutch company logo' />

              <div className={style.frame52}>
                <div className={style.heading}>
                  The most promising mobile apps solution providers globally
                </div>
                <div className={style.subHeading}>
                  We have been recognized as a market leader globally, post a
                  rigorous evaluation of factors presence & client experience.
                </div>
              </div>
            </div>
          </div>
          <div className={style.frame59}>
            <Award />
          </div>
          <div className={style.frame60}>
            <ReUseTesti onImg={Iso} /> <ReUseTesti onImg={Clutch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WapperTestimonials;
