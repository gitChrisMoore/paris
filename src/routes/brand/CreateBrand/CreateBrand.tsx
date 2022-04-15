import { Field, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router';
import BasicButton from '../../../components/Buttons/BasicButton/BasicButton';
import InputTextField from '../../../components/InputTextField/InputTextField';
import FormSmall from '../../../layouts/Forms/FormSmall';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useCreateBrandForm from './useCreateBrandForm';

const CreateBrand = () => {
  const { formik } = useCreateBrandForm();
  const navigate = useNavigate();
  return (
    // Snippet
    <>
      <MainLayout>
        <FormSmall
          title={'New Brand'}
          subtitle={'Tell us a bit more about the brand'}>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <Field
                id="name"
                name="name"
                label={'Brand Name'}
                component={InputTextField}
              />
              <Field
                id="description"
                name="description"
                label={'Description'}
                component={InputTextField}
              />
              <div className="flex justify-between mt-4">
                <BasicButton
                  variant="outlined"
                  onClick={() => navigate('/retailer/retailer-dashboard')}>
                  go back
                </BasicButton>
                <BasicButton type={'submit'} variant="primary">
                  create
                </BasicButton>
              </div>
            </Form>
          </FormikProvider>
        </FormSmall>
      </MainLayout>
    </>
  );
};

export default CreateBrand;
