import { useFormik } from 'formik';
import { ICreateAccountForm } from '../interfaces/ICreateAccountForm';

export interface useCreateAccountFormProps {
  handleSubmit: (formValues: ICreateAccountForm) => Promise<void>;
}

const useAccountCreateForm = (props: useCreateAccountFormProps) => {
  const { handleSubmit } = props;

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: ''
    },
    onSubmit: handleSubmit
  });

  return {
    formik
  };
};

export default useAccountCreateForm;
