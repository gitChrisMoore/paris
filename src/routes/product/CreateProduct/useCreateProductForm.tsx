import { useFormik } from 'formik';
import useProducts from '../../../hooks/useProducts';
import { ICreateProductForm } from '../../../interfaces/ICreateProductForm';

const useCreateProductForm = () => {
  const { createProduct } = useProducts();

  const handleSubmit = async (formValues: ICreateProductForm) => {
    console.log('formValues', formValues);

    const res = await createProduct(formValues);
    console.log('res', res);
  };

  const formik = useFormik({
    initialValues: { title: '', description: '', file: undefined },
    onSubmit: handleSubmit
  });

  return { formik };
};

export default useCreateProductForm;
