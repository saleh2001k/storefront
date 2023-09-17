import React from 'react';
import { Button, ButtonGroup, Stack } from '@mui/material';
import CableIcon from '@mui/icons-material/Cable';
import FoodIcon from '@mui/icons-material/FastfoodOutlined';
import TechIcon from '@mui/icons-material/MilitaryTechOutlined';
import SportsIcon from '@mui/icons-material/Sports';
import { connect } from 'react-redux';
import { setActiveCategory } from '../../store/categories';

function CustomCategories(props) {
    function handleCategoryChange(e) {
        let value = e.target.value
        props.setActiveCategory(value)
    }

    return (
        <Stack direction='row' spacing={2} justifyContent='center' marginY={4}>
            <ButtonGroup variant='text' color='secondary'>
                {props.productManager.categoryReducer.categories.map(category => (
                    <Button
                        key={category['_id']}
                        value={category.name}
                        onClick={handleCategoryChange}
                        startIcon={
                            category.name === 'electronics' ? <CableIcon /> :
                                category.name === 'food' ? <FoodIcon /> :
                                    category.name === 'games' ? <SportsIcon /> :
                                        <TechIcon />
                        }
                    >
                        {category.name}
                    </Button>
                ))}
            </ButtonGroup>
        </Stack>
    );
}

const mapStateToProps = state => ({
    productManager: state
});

const mapDispatchToProps = {
    setActiveCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomCategories);
