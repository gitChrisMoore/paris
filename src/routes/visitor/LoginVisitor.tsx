import { Field, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router';
import BasicButton from '../../components/Buttons/BasicButton/BasicButton';
import InputTextField from '../../components/InputTextField/InputTextField';
import { useAuthContext } from '../../contexts/Auth';
import { IRegisterForm } from '../../interfaces/IRegisterForm';
import FormSmallCenter from '../../layouts/Forms/FormSmallCenter';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import useSignupForm from './useSignupForm';

const LoginVisitor = () => {
  const { signIn } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (formValues: IRegisterForm) => {
    //@ts-expect-error: I am lazy
    const { user, error } = await signIn(formValues);

    if (error) alert(error.message);
    if (user) {
      console.log('signin customer - success - ', user);
      navigate('/customer/customer-dashboard');
    }
  };

  const { formik } = useSignupForm({
    handleSubmit,
    email: 'customer1@gmail.com'
  });

  return (
    <>
      <MainLayout type={'brand'}>
        <FormSmallCenter title={'Login'}>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <Field
                id="email"
                name="email"
                label={'Email'}
                component={InputTextField}
              />
              <Field
                id="password"
                name="password"
                label={'Password'}
                component={InputTextField}
              />

              <div className="flex">
                <BasicButton type="submit" variant="primary-grow">
                  Signin
                </BasicButton>
              </div>
              <div className="flex mt-2">
                <BasicButton
                  variant="text-grow"
                  onClick={() => navigate('/visitor/signup')}>
                  create an account
                </BasicButton>
              </div>
            </Form>
          </FormikProvider>
        </FormSmallCenter>
      </MainLayout>
    </>
  );
};

export default LoginVisitor;
