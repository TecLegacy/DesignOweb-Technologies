import style from './reUseTesti.module.css';

const ReUseTesti = prop => {
  return (
    <>
      <div className={style.frame53}>
        <img src={prop.onImg} alt=' company logo' />

        <div className={style.frame52}>
          <div className={style.heading}>
            The most promising mobile apps solution providers globally
          </div>
          <div className={style.subHeading}>
            We have been recognized as a market leader globally, post a rigorous
            evaluation of factors presence & client experience.
          </div>
        </div>
      </div>
    </>
  );
};

export default ReUseTesti;
