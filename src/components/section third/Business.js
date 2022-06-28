import style from './business.module.css';
import Cat from '../../svg/Cats.svg';
const Business = () => {
  return (
    <>
      <div className={style.frame89}>
        <div className={style.frame84049}>
          <div className={style.frame85}>
            <div className={style.frame84}>
              <div className={style.frame36}>
                <div className={style.heading}>Repository of our Work</div>

                <div className={style.subHeading}>
                  We Help to Enhance your Business
                </div>
              </div>
            </div>
            <div className={style.frame88}>
              <div className={style.group}>
                <img className={style.cat} src={Cat} alt='' />
                <div className={style.frame9}>
                  <div className={style.frame8}>
                    <div className={style.frame87}>
                      <div className={style.catHeading}>Pets Care</div>
                      <div className={style.catLocation}>South Africa</div>
                    </div>
                    <div className={style.about}>
                      Get easy and quick services for your pet just by sitting
                      at your home. Take care of the well being and the fun
                      activities of your pet by a few clicks away.
                    </div>
                  </div>
                  <div className={style.frame7}>
                    <button className={style.button}>View Website</button>
                  </div>
                </div>
                <div className={style.rectangle}></div>
              </div>
            </div>
          </div>
          <div className={style.frame84048}>
            <div className={style.borderEllipse1} />
            <div className={style.borderEllipse2} />
            <div className={style.borderEllipse3} />
          </div>
        </div>
        <div className={style.frame7}>Explore more Case Studies</div>
      </div>
    </>
  );
};

export default Business;
