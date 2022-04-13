import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import useBrands from '../../../hooks/useBrands';
import { ICreateBrandForm } from '../../../interfaces/ICreateBrandForm';

const useCreateBrandForm = () => {
  const { createBrand } = useBrands();
  const navigate = useNavigate();

  const handleSubmit = async (formValues: ICreateBrandForm) => {
    console.log('formValues', formValues);

    const res = await createBrand(formValues);
    console.log('res', res);
    navigate('/brand/');
  };

  const formik = useFormik({
    initialValues: { name: '', description: '' },
    onSubmit: handleSubmit
  });

  return { formik };
};

export default useCreateBrandForm;
