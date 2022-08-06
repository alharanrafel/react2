import React from 'react'
import { Button, Typography, Grid }  from '@mui/material'
import TextField from '@mui/material/TextField';

const ContactForm = () => {
  return (
    <div style={{width:"400px",marginLeft:"300px"}}>
      <Grid>
    <Typography variant="h5">
        Contact Us Form
    </Typography>
      
      <form>
    <TextField placeholder="Please enter name" id="filled-basic" label="Enter Name" variant="filled" />
    <TextField id="filled-basic" label="Enter Email" defaultValue="@gmail.com" variant="filled" />
    <TextField id="filled-basic" label="Enter Phone" variant="filled"  type="number"/>
    <TextField id="filled-basic" label="Enter Age" variant="filled"  type="number"/>

    <TextField id="filled-basic" placeholder='add location' label="Enter Location" variant="filled" />
    </form>




     
      </Grid>
      <Button  variant="contained" color="success"  size="large" >
        Submit
      </Button>
      
      </div>

   
  )
}

export default ContactForm