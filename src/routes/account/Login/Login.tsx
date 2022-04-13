import { Field, Form, FormikProvider } from 'formik';
import useLoginForm from './useLoginForm';

const Login = () => {
  const { formik } = useLoginForm();

  return (
    <>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <div>Login</div>
          <div>Username</div>
          <div>
            <Field id="email" name="email" placeholder="user1@gmail.com" />
          </div>
          <div>password</div>
          <div>
            <Field id="password" name="password" placeholder="abcd1234" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
};

export default Login;
