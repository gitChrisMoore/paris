import { Field, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router';
import BasicButton from '../../../components/Buttons/BasicButton/BasicButton';
import InputTextField from '../../../components/InputTextField/InputTextField';
import useAccountCreateForm from '../../../forms/useAccountCreateForm';
import useAccounts from '../../../hooks/useAccounts';
import { ICreateAccountForm } from '../../../interfaces/ICreateAccountForm';
import FormSmallCenter from '../../../layouts/Forms/FormSmallCenter';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const CreateAccount = () => {
  const navigate = useNavigate();

  const { createAccount } = useAccounts();

  const handleSubmit = async (formValues: ICreateAccountForm) => {
    createAccount(formValues).then(
      (res) => {
        console.log('createAccount update:', res);
        navigate('/customer/customer-dashboard');
      },
      (error) => {
        alert(error);
      }
    );
  };

  const { formik } = useAccountCreateForm({
    handleSubmit
  });

  return (
    <>
      <MainLayout>
        <FormSmallCenter title={'Register'}>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <Field
                id="first_name"
                name="first_name"
                label={'First Name'}
                component={InputTextField}
              />
              <Field
                id="last_name"
                name="last_name"
                label={'Last Name'}
                component={InputTextField}
              />

              <div className="flex">
                <BasicButton type="submit" variant="primary-grow">
                  Apply
                </BasicButton>
              </div>
            </Form>
          </FormikProvider>
        </FormSmallCenter>
      </MainLayout>
    </>
  );
};

export default CreateAccount;
