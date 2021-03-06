import { Field, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router';
import BasicButton from '../../../components/Buttons/BasicButton/BasicButton';
import InputFileField from '../../../components/InputFileField/InputFileField';
import InputSelectField from '../../../components/InputSelectField/InputSelectField';
import InputTextField from '../../../components/InputTextField/InputTextField';

import { useProjectContext } from '../../../contexts/Project';
import FormSmall from '../../../layouts/Forms/FormSmall';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

import useCreateProductForm from './useCreateProductForm';

const CreateProduct = () => {
  const { brands } = useProjectContext();
  const { formik } = useCreateProductForm();
  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <FormSmall title={'New Product'} subtitle={'Tell us a bit more about the product'}>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <Field
                id="brand_id"
                name="brand_id"
                label={'Brand'}
                component={InputSelectField}
                option_list={brands}
              />

              <Field id="title" name="title" label={'Title'} component={InputTextField} />

              <Field
                id="description"
                name="description"
                label={'Description'}
                component={InputTextField}
              />

              <Field id="file" name="file" label={'Product Image'} component={InputFileField} />

              <div className="flex justify-between mt-4">
                <BasicButton
                  variant="outlined"
                  onClick={() => navigate('/retailer/retailer-dashboard')}>
                  go back
                </BasicButton>
                <BasicButton type="submit" variant="primary">
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

export default CreateProduct;
