import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import CartItems from './CartItems';

function Cart(props) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{
              textTransform: 'uppercase',
              marginTop: '40px',
              marginBottom: '20px', 
              }}
          >
            My Cart
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
            sx={{ marginBottom: '20px' }} 
               >
            Checkout
          </Typography>
        </Container>
      </div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="40%"
        height="40%"
        margin="auto"
        bgcolor="#ffff"
        borderRadius="16px"
        boxShadow="3px 2px #B4B4B371"
        p={2} // Added padding
      >
        <List
          direction="row"
          gap="15px"
          justifyContent="center"
          sx={{ width: '100%' }}
          flexWrap="wrap"
          margin="auto"
          marginY="20px" 
        >
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              fontWeight: 700,
            }}
          >
            <span>Item</span> <span>Price$</span>
          </ListItem>
          {props.cart.cart?.map((product) => (
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span>{product.name}</span> <span>{product.price}$</span>
            </ListItem>
          ))}
        </List>

        <Typography textAlign="center" fontWeight={700} marginTop="20px">Total {Math.floor(props.cart.cart?.reduce((a, b) => a + b.price, 0))}$</Typography>
        <Box marginTop="30px">
          <Grid container>
            <Grid item xs={12} sm={12} md>
              <Typography variant="h6" gutterBottom textAlign="center">
                Billing Address
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="center">
                <TextField id="name" name="name" label="Full Name" />
                <TextField id="address" name="address" label="Address" />
                <TextField id="city" name="city" label="City" />
                <TextField id="state" name="state" label="State" />
                <TextField id="zip" name="zip" label="Zip" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} gap={2} display="flex" direction="column">
              <Typography variant="h6" gutterBottom textAlign="center">
                Payment details
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="center" height="100%">
                <TextField
                  label="Expiration"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ marginBottom: '10px' }}
                />

                <TextField id="cc_number" name="cc_number" label="Credit Card #" sx={{ marginBottom: '10px' }} />
                <TextField id="cvv" name="cvv" label="CVV" sx={{ marginBottom: '20px' }} />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => alert('Thank you for your purchase')}
                >
                  Place Your Order
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productManager: state,
  cart: state.cartReducer,
});

export default connect(mapStateToProps)(Cart);
