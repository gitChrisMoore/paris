import { Field, Form, FormikProvider } from 'formik';
import useRegisterForm from './useRegisterForm';

const Register = () => {
  const { formik } = useRegisterForm();

  return (
    <>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <div>Create Account</div>
          <div>Username</div>
          <div>
            <Field id="email" name="email" placeholder="user1@gmail.com" />
          </div>
          <div>password</div>
          <div>
            <Field id="password" name="password" placeholder="abcd1234" />
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
};

export default Register;
