import { useFormik } from 'formik';
import { useAuthContext } from '../../../contexts/Auth';
import { IRegisterForm } from '../../../interfaces/IRegisterForm';

const useRegisterForm = () => {
  const { signUp } = useAuthContext();

  const handleSubmit = async (formValues: IRegisterForm) => {
    console.log('formValues', formValues);
    //@ts-expect-error: I am lazy
    const { user, error } = await signUp(formValues);

    console.log('user', user);
    console.log('error', error);
  };

  const formik = useFormik({
    initialValues: { email: 'user1@gmail.com', password: 'abcd1234', type: '' },
    onSubmit: handleSubmit
  });

  return { formik };
};

export default useRegisterForm;
