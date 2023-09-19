import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { connect } from 'react-redux';
import { IconButton } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { removeFromCart } from '../../store/cartReducer';


function TemporaryDrawer({ cart, removeFromCart }) {
    console.log(cart.cart)
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Button variant='contained' sx={{ width: '100%', borderRadius: 0 }} size='large' color={'primary'} disableRipple>Items List</Button>
            <List>

                {cart.cart.map((text, index) => (
                    <ListItem key={text._id} disablePadding>

                        <Button sx={{ marginLeft: '5px' }} variant='text' size='small' color={'primary'} disableRipple>
                            <ListItemText color='secondary' > {text.name},  {text.price}$</ListItemText>
                            <IconButton onClick={() => removeFromCart(text)}><ClearOutlinedIcon /></IconButton>
                        </Button>
                    </ListItem>
                ))}
            </List>
            <Divider />

        </Box >
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <React.Fragment key={'right'}>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('Current Items in Cart')}
                </Drawer>
                <Button variant='contained' color={'primary'} onClick={toggleDrawer('right', true)}>{'Cart Items Menus'}</Button>
            </React.Fragment>
        </div>
    );
}

const mapStateToProps = state => ({
    productManager: state.categoryReducer,
    cart: state.cartReducer
})
const mapDispatchToProps = { removeFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer)