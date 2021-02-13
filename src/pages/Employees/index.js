import React from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeesForm from '../EmployeesForm';

import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme=>({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}));

function Employees() {
  const classes = useStyles();   

  return (
    <>    
        <PageHeader title="New Employee" subTitle="Form design with validation" icon={<PeopleOutlineTwoToneIcon fontSize="large"/>}/>  
        <Paper className={classes.pageContent}>
            <EmployeesForm />    
        </Paper>
    </>
    
    );
}

export default Employees;