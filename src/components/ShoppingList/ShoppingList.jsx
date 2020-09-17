import React from 'react'
import Checkbox from '../../shared/Checkbox'
import { Wrapper, Title, Array } from './ShoppingList.styles'
// import { selectAllProducts } from '../../store/Products/Products.selectors'
// import { useSelector } from 'react-redux'


function ShoppingList({ title, products, onToggle }) {
    // const productsFromRedux = useSelector(selectAllProducts)

    return <Wrapper>
        <Title >
            { title }
        </Title>

        <Array>
            {
                products.map(product => 
                    <Checkbox
                        key={product.id}
                        value={product.checked} 
                        title={product.name}
                        onClick={() => onToggle(product.id)}
                    />
                )
            }
        </Array>
    </Wrapper>
}

export default ShoppingList