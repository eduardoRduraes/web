import { makeStyles } from '@material-ui/styles';
import React,{useState} from 'react';


export const useForm = (props) => {
  const [values, setValues] = useState(props);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  return {
    values,
    setValues,
    handleInputChange
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}));

export const Form = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      {props.children}
    </form>
    );
}
