import { Field, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router';
import BasicButton from '../../../components/Buttons/BasicButton/BasicButton';
import InputTextField from '../../../components/InputTextField/InputTextField';
import FormSmall from '../../../layouts/Forms/FormSmall';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useLoginForm from './useLoginForm';

const Login = () => {
  const { formik } = useLoginForm();
  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <FormSmall>
          <div className="flex my-5">
            <div className="text-lg font-medium mb-2 mx-auto">Login</div>
          </div>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <Field id="email" name="email" label={'Email'} component={InputTextField} />
              <Field id="password" name="password" label={'Password'} component={InputTextField} />

              <div className="flex">
                <BasicButton type="submit" variant="primary-grow">
                  Login
                </BasicButton>
              </div>
              <div className="flex mt-2">
                <BasicButton variant="outlined-grow" onClick={() => navigate('/account/register')}>
                  Register
                </BasicButton>
              </div>
            </Form>
          </FormikProvider>
        </FormSmall>
      </MainLayout>
    </>
  );
};

export default Login;
