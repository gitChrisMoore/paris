import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import useProducts from '../../../hooks/useProducts';
import { ICreateProductForm } from '../../../interfaces/ICreateProductForm';

const useCreateProductForm = () => {
  const { createProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = async (formValues: ICreateProductForm) => {
    console.log('useCreateProductForm formValues', formValues);

    const res = await createProduct(formValues);
    console.log('res', res);
    navigate('/retailer/retailer-dashboard');
  };

  const formik = useFormik({
    initialValues: { title: '', description: '', brand_id: '', file: undefined },
    onSubmit: handleSubmit,
    enableReinitialize: true
  });

  return { formik };
};

export default useCreateProductForm;
