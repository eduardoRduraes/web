import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1)
        }
    }
}));

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
    const [values, setValues] = useState(initialFValues);

    const classes = useStyles();

    useEffect(() => {

    }, []);

    const handleInputChange = e =>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        });
    }

    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Full Name" name="fullName" value={values.fullName} onChange={handleInputChange}/>
                    <TextField variant="outlined" label="E-mail" name="email" value={values.email} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
    );
}

export default EmployeesForm;