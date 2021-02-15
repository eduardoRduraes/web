import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Controls from "../components/controls/Controls";
import { useForm, Form } from "../components/useForm";

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmendId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const EmployeesForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  useEffect(() => {}, []);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="email"
            label="E-mail"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            items={genderItems}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="department"
            label="Department"
            value={values.departmendId}
            onChange={handleInputChange}
            options={}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeesForm;
