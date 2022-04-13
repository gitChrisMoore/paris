import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../../contexts/Auth';
import { IRegisterForm } from '../../../interfaces/IRegisterForm';

const useLoginForm = () => {
  const { signIn } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (formValues: IRegisterForm) => {
    console.log('formValues', formValues);
    //@ts-expect-error: I am lazy
    const { user, error } = await signIn(formValues);

    if (user && !error) {
      console.log('success login', user);
      navigate('/retailer/retailer-dashboard');
    }
  };

  const formik = useFormik({
    initialValues: { email: 'user1@gmail.com', password: 'abcd1234', type: '' },
    onSubmit: handleSubmit
  });

  return { formik };
};

export default useLoginForm;
