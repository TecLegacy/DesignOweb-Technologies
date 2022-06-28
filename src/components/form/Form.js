import style from './form.module.css';
import FormImg from '../../svg/form.svg';
import { FormInput } from './form input/FormInput';
const Form = () => {
  return (
    <>
      <div className={style.frame161}>
        <div className={style.frame128}>
          <div className={style.frame127}>
            <div className={style.frame122}>
              <div className={style.frame117}>
                <div className={style.text}>
                  Your business idea is <span>valuable</span>. We are here to
                  provide you with the right business expertise.
                </div>
                <div className={style.frame116}>
                  <div className={style.subText}>
                    On-call assistance in all timezones
                  </div>
                  <div className={style.subText}>
                    Projects consulting by experts
                  </div>
                  <div className={style.subText}>Detail project estimation</div>
                </div>
                <div className={style.formImg}>
                  <img src={FormImg} alt='form svg' />
                </div>
              </div>
            </div>
            <div className={style.frame126}>
              <div className={style.frame125}>
                <div className={style.frame162}>
                  <div className={style.heading}>Have a Query?</div>
                  <div className={style.subHeading}>
                    Request Free Consultation
                  </div>
                </div>
                <FormInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
