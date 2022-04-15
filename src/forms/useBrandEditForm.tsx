import { useFormik } from 'formik';
import { IBrandFormEdit } from '../interfaces/IBrandFormEdit';

export interface useSignupFormProps {
  handleSubmit: (formValues: IBrandFormEdit) => Promise<void>;
}

const useBrandEditForm = (props: useSignupFormProps) => {
  const { handleSubmit } = props;

  const formik = useFormik({
    initialValues: { id: '', user_id: '', name: '', description: '' },
    onSubmit: handleSubmit
  });

  return {
    formik
  };
};

export default useBrandEditForm;
