import { Field, Form, FormikProvider } from 'formik';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductEditForm from '../../../../forms/useProductEditForm';
import useProducts from '../../../../hooks/useProducts';
import { IProductFormEdit } from '../../../../interfaces/IProductFormEdit';
import InputTextField from '../../../InputTextField/InputTextField';
import FullscreenDialog from '../../../ui/FullscreenDialog/FullscreenDialog';

// Domain component example

interface Props {
  id?: string;
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}

const ProductEdit: FC<Props> = (props) => {
  const { id, isOpen, setIsOpen } = props;
  const navigate = useNavigate();
  const { status, updateProduct, getProductByID } = useProducts();

  const handleSubmit = async (formValues: IProductFormEdit) => {
    updateProduct(formValues).then(
      (res) => {
        console.log('product update:', res);
        navigate('');
      },
      (error) => {
        alert(error);
      }
    );
  };

  const { formik } = useProductEditForm({
    handleSubmit
  });

  const fetchData = async (id: string) => {
    getProductByID(id).then(
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
        title="Edit Product"
        saveText="save"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSave={formik.handleSubmit}>
        {status === 'resolved' ? (
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <Field
                id="title"
                name="title"
                label={'Title'}
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

export default ProductEdit;
