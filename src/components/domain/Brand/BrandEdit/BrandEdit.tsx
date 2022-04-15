import { Field, Form, FormikProvider } from 'formik';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useBrandEditForm from '../../../../forms/useBrandEditForm';
import useBrands from '../../../../hooks/useBrands';
import { IBrandFormEdit } from '../../../../interfaces/IBrandFormEdit';
import InputTextField from '../../../InputTextField/InputTextField';
import FullscreenDialog from '../../../ui/FullscreenDialog/FullscreenDialog';

// Domain component example

interface Props {
  id?: string;
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}

const BrandEdit: FC<Props> = (props) => {
  const { id, isOpen, setIsOpen } = props;
  const navigate = useNavigate();
  const { status, updateBrand, getBrandByID } = useBrands();

  const handleSubmit = async (formValues: IBrandFormEdit) => {
    updateBrand(formValues).then(
      (res) => {
        console.log('brand update:', res);
        navigate('');
      },
      (error) => {
        alert(error);
      }
    );
  };

  const { formik } = useBrandEditForm({
    handleSubmit
  });

  const fetchData = async (id: string) => {
    getBrandByID(id).then(
      (res) => {
        formik.setValues(res);
      },
      (error) => {
        alert(error);
      }
    );
  };

  useEffect(() => {
    if (id) {
      fetchData(id).catch(console.error);
    }
  }, [id]);

  return (
    <>
      <FullscreenDialog
        title="Edit Brand"
        saveText="save"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSave={formik.handleSubmit}>
        {status === 'resolved' ? (
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
            </Form>
          </FormikProvider>
        ) : (
          'loading'
        )}
      </FullscreenDialog>
    </>
  );
};

export default BrandEdit;
