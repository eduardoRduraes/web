import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, {useEffect} from 'react';
import {useForm, Form} from '../components/useForm';


const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmendId: '',
    hireDate: new Date(),
    isPermanent: false
};


const EmployeesForm = () => {

    const { values, setValues, handleInputChange} = useForm(initialFValues);

    useEffect(() => {

    }, []);  

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Full Name" name="fullName" value={values.fullName} onChange={handleInputChange}/>
                    <TextField variant="outlined" label="E-mail" name="email" value={values.email} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row
                                    name="gender"
                                    value={values.gender}>
                            <FormControlLabel value="male" control={<Radio />} label="Male"/>   
                            <FormControlLabel value="female" control={<Radio />} label="Female"/>   
                            <FormControlLabel value="other" control={<Radio />} label="Other"/>   
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
    );
}

export default EmployeesForm;