import React from 'react';
import { connect } from 'react-redux';
import { Container, Typography } from '@mui/material';

const CurrentCategory = ({ productManager }) => {

    return (
        <div >
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom textTransform={'uppercase'}>
                    {productManager.activeCategory}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {
                        productManager.categories.map(element => {
                            if (element.name === productManager.activeCategory) return element.description
                        })
                    }
                </Typography>
            </Container>
        </div>
    );
}

const mapStateToProps = state => ({
    productManager: state.categoryReducer
})

export default connect(mapStateToProps)(CurrentCategory);