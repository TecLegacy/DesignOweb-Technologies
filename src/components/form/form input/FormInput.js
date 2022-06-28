import style from './formInput.module.css';
import FormReUse from './FormReUse';
import { useState } from 'react';
export const FormInput = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    tel: '',
    area: '',
  });
  const userInput = [
    {
      id: 1,
      type: 'text',
      name: 'fullName',
      errorMessage:
        'Your name should be 3-16 length, should not have special character',
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}$',
      placeholder: 'Your Full Name',
      label: 'Your Full Name',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      errorMessage: 'Please Enter Valid Email',
      required: true,

      placeholder: 'Email ID',
      label: 'Email ID',
    },
    {
      id: 3,
      name: 'phone',
      type: 'tel',
      errorMessage: 'Please Enter valid Number',
      required: true,
      // pattern: '[0-9]{3}-[0-9]{2}-[0-9]{3}',
      pattern: '[789][0-9]{9}',
      placeholder: ' 98 5555 4444',
      label: 'Email ID',
    },
    {
      id: 4,
      name: 'textArea',
      type: 'area',
      errorMessage: 'Enter Your Requirements!',
      required: true,

      placeholder: 'Requirements ',
      label: 'Email ID',
    },
  ];

  const onChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitHandler = e => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <>
      <div className={style.container}>
        <form onSubmit={submitHandler}>
          {userInput.map(input => (
            <FormReUse
              key={input.id}
              {...input}
              value={userData[input.name]}
              onChange={onChange}
            />
          ))}

          <button className={style.button}>
            <div className={style.back}>Submit your free Consultation</div>
          </button>
        </form>
        <div className={style.conditions}>
          <input
            type='checkbox'
            id='tmc'
            value='  I accept all the terms and conditions'
          />
          <label className={style.tmc} htmlFor='tmc'>
            I accept all the terms and conditions
          </label>
        </div>
      </div>
    </>
  );
};
