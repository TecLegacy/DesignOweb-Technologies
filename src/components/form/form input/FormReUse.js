import style from './FormReUse.module.css';
import { useState } from 'react';
const FormReUse = prop => {
  const [focus, setFocus] = useState(false);
  const { label, id, errorMessage, onChange, ...inputProps } = prop;

  const blurHandler = e => {
    setFocus(true);
  };
  return (
    <>
      <div className={style.formInput}>
        <input
          className={style.input}
          type='text'
          // placeholder={prop.placeholder}
          {...inputProps}
          onChange={onChange}
          onBlur={blurHandler}
          focus={focus.toString()}
        />

        <span className={style.error}>{errorMessage}</span>
      </div>
    </>
  );
};

export default FormReUse;
