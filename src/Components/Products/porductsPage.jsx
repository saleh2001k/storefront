import React from 'react'
import Drawer from '../Drawer/index'
import ProductList from './list'
import Categories from '../Categories/index'
import CurrentCat from '../Categories/CurrentCat'


export default function ProductsPage() {
    return (
        <div>
            <Categories />
            <Drawer />
            <CurrentCat />
            <ProductList />
        </div>
    )
}