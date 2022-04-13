import React from 'react';

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  field?: any;
  form?: any;
}

const InputFileField: React.FC<Props> = (props) => {
  const { id, label, placeholder = '  ', field = {}, form = {} } = props;

  return (
    <div className="form-group py-2">
      <input
        type={'file'}
        name={label}
        placeholder={placeholder}
        className="block w-full mb-2 z-10 focus:outline-none bg-transparent"
        onChange={(event) => {
          console.log('event', event);
          if (event && event.currentTarget && event.currentTarget.files) {
            console.log('file', event.currentTarget.files[0]);
            form.setFieldValue(id, event.currentTarget.files[0]);
          }
        }}
        id={id}
      />
    </div>
  );
};

export default InputFileField;
