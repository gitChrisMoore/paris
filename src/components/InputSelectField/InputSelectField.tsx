import React from 'react';
import { getIn } from 'formik';
import InputFieldWrapper from '../InputFieldWrapper/InputFieldWrapper';

interface Props {
  id: string;
  label: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  option_list: any;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  field?: any;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  form?: any;
}

const InputSelectField: React.FC<Props> = (props) => {
  const { id, label, option_list, field = {}, form = {} } = props;

  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <InputFieldWrapper errorText={errorText} id={id} label={label}>
      <select
        type={id}
        name={label}
        placeholder=" "
        className="block w-full appearance-none mb-2 z-10 focus:outline-none bg-transparent"
        {...field}
        {...props}>
        <option value="apples"></option>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {option_list.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </InputFieldWrapper>
  );
};

export default InputSelectField;
