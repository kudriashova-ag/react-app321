import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Form1 = () => {
  const initialValues = {
    title: "",
    amount: 1,
    price: 0,
  };

  const formSchema = Yup.object().shape({
    title: Yup.string().min(3).required("Title is required"),
    amount: Yup.number().min(1).required(),
    price: Yup.number().min(1, "Price must be >1").required(),
  });

  const submitHandler = (values, formikBag) => {
      console.log(values);
      formikBag.resetForm();
  };

  return (
    <div>
      <h1>Form 1</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={formSchema}
      >
        {() => (
          <Form>
            <div>
              <Field name="title" />
              <ErrorMessage component="div" className="error" name="title" />
            </div>

            <div>
              <Field type="number" name="amount" />
              <ErrorMessage component="div" className="error" name="amount" />
            </div>

            <div>
              <Field name="price" />
              <ErrorMessage component="div" className="error" name="price" />
            </div>

            <Field type="submit" value="Add" id="submit" />
          </Form>
        )}
          </Formik>
          
          <hr />
    </div>
  );
};

export default Form1;
