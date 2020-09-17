import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wrapper, Container } from './App.styles'

import LineChart from '../../shared/LineChart/LineChart'

import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import ShoppingList from '../ShoppingList'
import Calculator from '../Calculator'

import extractPercentage from '../../utils/extractPercentage'

import { selectSelectedProducts, selectSelectedProductsTotalPrice } from '../../store/Products/Products.selectors'
import { toggleProduct } from '../../store/Products/Products.actions'

function App() {
    const dispatch = useDispatch()
    
    const colors = [ '#62cbc6', '#00abad', '#00858c', '#006073', '#004d61' ]
    
    const selectedProducts = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(selectSelectedProductsTotalPrice)

    function handleToggle (id) {
        dispatch(toggleProduct(id))
    }

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={
                    <ShoppingList 
                        title="produtos disponíveis"
                        onToggle={handleToggle}
                    />}

                middle={
                    <ShoppingList 
                        title="sua lista de compras"
                        displayOnlySelected
                        onToggle={handleToggle}
                    />}

                right={<div>
                    estatísticas

                    <LineChart
                        color={colors[0]}
                        title="saudável"
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(selectedProduct => selectedProduct.tags.includes('healthy'))
                                .length
                        )}
                    />

                    <LineChart
                        color={colors[1]}
                        title="não tão saudável assim"
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(selectedProduct => selectedProduct.tags.includes('junk'))
                                .length
                        )}
                    />

                    <LineChart
                        color={colors[2]}
                        title="limpeza"
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(selectedProduct => selectedProduct.tags.includes('cleaning'))
                                .length
                        )}
                    />

                    <LineChart
                        color={colors[3]}
                        title="outros"
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(selectedProduct => selectedProduct.tags.includes('others'))
                                .length
                        )}
                    />

                <div style={{ marginTop: 12 }}>
                    <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364a' }}>
                        previsão de gastos:
                    </h2>
                    <div style={{ fontSize: 24 }}>
                        { totalPrice.toLocaleString('pt-br', { 
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL' }) }
                    </div>

                    <Calculator />
                </div>

                </div>}
            />
        </Container>
    </Wrapper>
}

export default App