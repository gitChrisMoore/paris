import { Field, Form, FormikProvider } from 'formik';

import useCreateProductForm from './useCreateProductForm';

const CreateProduct = () => {
  const { formik } = useCreateProductForm();

  return (
    <>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <div>Create Product</div>
          <div>Title</div>
          <div>
            <Field id="title" name="title" />
          </div>
          <div>Description</div>
          <div>
            <Field id="description" name="description" />
          </div>
          <div className="form-group">
            <label htmlFor="file">File upload</label>
            <input
              id="file"
              name="file"
              type="file"
              // onChange={formik.handleChange}
              onChange={(event) => {
                console.log('event', event);
                if (event && event.currentTarget && event.currentTarget.files) {
                  console.log('file', event.currentTarget.files[0]);

                  formik.setFieldValue('file', event.currentTarget.files[0]);
                }
              }}
              // value={formik.values.file}
              // onChange={(event) => {
              //   setFieldValue('file', event.currentTarget.files[0]);
              // }}
              className="form-control"
            />
          </div>

          <div>
            <button type="submit">Create Product</button>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
};

export default CreateProduct;
