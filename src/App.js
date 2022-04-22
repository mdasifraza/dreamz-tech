import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { statesArray, at, propertyOption, propertyTaxes, landOption, landTaxes, taxOptionOne, taxOptionTwo, taxOptionThree } from './staticData';
import { useDispatch } from 'react-redux';
import { saveFormInfo } from './redux/action';
import ShowData from './ShowData.js';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {

  const [name, setName] = useState("");
  const [stateName, setStateName] = useState("");
  const [adminType, setAdminType] = useState("");
  const [propertyLand, setPropertyLand] = useState("");
  const [location, setLocation] = useState("");
  const [taxesType, setTaxesType] = useState("");
  const [tax, setTax] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };

  const handleChangeAdminType = (e) => {
    setAdminType(e.target.value);
    setPropertyLand("");
    setTaxesType("");
  };

  const handleTaxesType = (e) => {
    setTaxesType(e.target.value);
    setTax("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || stateName === "" || adminType === "" || propertyLand === "" || location === "" || taxesType === "") {
      setOpenError(true);
      return;
    }
    if (taxesType !== "No-Taxes" && tax === "") {
      setOpenError(true);
      return;
    }


    dispatch(
      saveFormInfo({ name, stateName, adminType, propertyLand, location, taxesType, tax })
    );

    setOpenSuccess(true);

    setName("");
    setStateName("");
    setAdminType("");
    setPropertyLand("");
    setLocation("");
    setTaxesType("");
    setTax("");
  };

  return (
    <>
      <Typography variant="h3" align="center" color="primary" sx={{ mt: 5 }}>DreamzTech Assessment</Typography>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <Box
            sx={{ display: 'grid', gap: 5, gridTemplateColumns: 'repeat(3, 1fr)', mb: 8 }}
            noValidate
            autoComplete="off"
          >

            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              id="standard-select-state"
              select
              label="State"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              helperText="Please select your state"
              variant="standard"
            >
              {statesArray.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-select-at"
              select
              label="Administrative Type"
              value={adminType}
              onChange={(e) => handleChangeAdminType(e)}
              helperText="Please select your Administrative Type"
              variant="standard"
            >
              {at.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

          </Box>

          <Box
            sx={{ display: 'grid', gap: 5, gridTemplateColumns: 'repeat(3, 1fr)', mb: 8 }}
            noValidate
            autoComplete="off"
          >
            {adminType === "Municipality" ?
              (<TextField
                id="standard-select-property"
                select
                label="Property"
                value={propertyLand}
                onChange={(e) => setPropertyLand(e.target.value)}
                helperText="Please select your Property Type"
                variant="standard"
              >
                {propertyOption.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              ) : null
            }
            {adminType === "Panchayat" ?
              (<TextField
                id="standard-select-land"
                select
                label="Land"
                value={propertyLand}
                onChange={(e) => setPropertyLand(e.target.value)}
                helperText="Please select your Land Type"
                variant="standard"
              >
                {landOption.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              ) : null
            }

            {adminType === "Municipality" || adminType === "Panchayat" ?
              (
                <TextField
                  id="standard-basic"
                  label="Location"
                  variant="standard"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              ) : null
            }

            {adminType === "Municipality" ?
              (<TextField
                id="standard-select-taxes-mincipality"
                select
                label="Taxes"
                value={taxesType}
                onChange={(e) => handleTaxesType(e)}
                helperText="Please select your Taxes Type"
                variant="standard"
              >
                {propertyTaxes.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              ) : null
            }
            {adminType === "Panchayat" ?
              (<TextField
                id="standard-select-taxes-panchayat"
                select
                label="Taxes"
                value={taxesType}
                onChange={(e) => handleTaxesType(e)}
                helperText="Please select your Taxes Type"
                variant="standard"
              >
                {landTaxes.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              ) : null
            }
          </Box>

          <Box
            sx={{ display: 'grid', mb: 6 }}
            noValidate
            autoComplete="off"
          >
            {adminType === "Municipality" && taxesType === "Land" ? (
              <TextField
                id="standard-select-tax"
                fullWidth
                select
                label="Tax"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
                helperText="Please select your Tax"
                variant="standard"
              >
                {taxOptionOne.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            ) : null
            }
            {adminType === "Municipality" && taxesType === "Land + Property" ? (
              <TextField
                id="standard-select-tax"
                fullWidth
                select
                label="Tax"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
                helperText="Please select your Tax"
                variant="standard"
              >
                {taxOptionTwo.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            ) : null
            }
            {adminType === "Panchayat" && taxesType === "Land" ? (
              <TextField
                id="standard-select-tax"
                fullWidth
                select
                label="Tax"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
                helperText="Please select your Tax"
                variant="standard"
              >
                {taxOptionThree.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            ) : null
            }
          </Box>
          <Button type="submit" variant="outlined">Submit</Button>
        </form>
      </div>

      <ShowData />

      <Snackbar open={openSuccess} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Form has been submited
        </Alert>
      </Snackbar>

      <Snackbar open={openError} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Kindly fill all the details
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
