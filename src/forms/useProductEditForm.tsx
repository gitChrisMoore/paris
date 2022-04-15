import { useFormik } from 'formik';
import { IProductFormEdit } from '../interfaces/IProductFormEdit';

export interface useSignupFormProps {
  handleSubmit: (formValues: IProductFormEdit) => Promise<void>;
}

const useProductEditForm = (props: useSignupFormProps) => {
  const { handleSubmit } = props;

  const formik = useFormik({
    initialValues: {
      id: '',
      user_id: '',
      brand_id: '',
      title: '',
      description: '',
      product_image_url: ''
    },
    onSubmit: handleSubmit
  });

  return {
    formik
  };
};

export default useProductEditForm;
