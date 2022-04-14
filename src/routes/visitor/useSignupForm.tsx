import { useFormik } from 'formik';
import { IRegisterForm } from '../../interfaces/IRegisterForm';

export interface useSignupFormProps {
  handleSubmit: (formValues: IRegisterForm) => Promise<void>;
  email?: string;
  password?: string;
}

const useSignupForm = (props: useSignupFormProps) => {
  const { handleSubmit, email = 'user1@gmail.com', password = 'abcd1234' } = props;

  const formik = useFormik({
    initialValues: { email: email, password: password, type: '' },
    onSubmit: handleSubmit
  });

  return {
    formik
  };
};

export default useSignupForm;
