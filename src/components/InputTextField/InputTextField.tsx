import React from 'react';
import { getIn } from 'formik';
import InputFieldWrapper from '../InputFieldWrapper/InputFieldWrapper';

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  field?: any;
  form?: any;
}

const InputTextField: React.FC<Props> = (props) => {
  const { id, label, placeholder = '  ', field = {}, form = {} } = props;

  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <InputFieldWrapper errorText={errorText} id={id} label={label}>
      <input
        type={id}
        name={label}
        placeholder={placeholder}
        className="block w-full mb-2 z-10 focus:outline-none bg-transparent"
        {...field}
        {...props}
      />
    </InputFieldWrapper>
  );
};

export default InputTextField;
