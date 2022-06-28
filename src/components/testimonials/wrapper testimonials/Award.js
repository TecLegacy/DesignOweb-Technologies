import style from './award.module.css';
import Awards from '../../../svg/Award.svg';
const Award = () => {
  return (
    <>
      <div className={style.container}>
        <img src={Awards} alt='Recognition' />
      </div>
      <div className={style.heading}>Awards & Recognition</div>
    </>
  );
};

export default Award;
