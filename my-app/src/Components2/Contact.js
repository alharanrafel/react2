import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import ContactForm ffrom './ContactForm'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Contact() {
  return (
    <div>
      
      <ContactForm />
     
    <Grid container spacing={15} style={{marginTop:"10px",marginLeft:"160px"}}>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[1].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`Contact us 
                   Phone : +12345667
                  email: imjdask@gmail.com
                  addres : il chicago`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid> 
    </div>
  );
}
