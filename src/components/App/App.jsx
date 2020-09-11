import React, { useState, useEffect } from 'react'
import { Wrapper, Container } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import Checkbox from '../../shared/Checkbox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'

function App() {
    const [ lettuce, setLettuce ] = useState(true)
    const [ rice, setRice ] = useState(false)
    const [ healthy, setHealthy ] = useState(20)

    const colors = [ '#62cbc6', '#00abad', '#00858c', '#006073', '#004d61' ]

    useEffect(function() {
        setTimeout(() => {
            setHealthy(80)
        }, 5000)
    },[])

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={<div>
                    produtos disponíveis

                    <Checkbox 
                        value={lettuce} 
                        title="Alface"
                        onClick={() => setLettuce(!lettuce)}
                    />
                </div>}
                middle={<div>
                    sua lista de compras

                    <Checkbox
                        value={rice} 
                        title="Arroz"
                        onClick={() => setRice(!rice)}
                    />
                </div>}
                right={<div>
                    estatísticas

                    <LineChart
                        color={colors[0]}
                        title="saudável"
                        percentage={healthy}
                    />


                    <LineChart
                        color={colors[1]}
                        title="não tão saudável assim"
                        percentage={45}
                    />

                    <LineChart
                        color={colors[2]}
                        title="limpeza"
                        percentage={35}
                    />

                    <LineChart
                        color={colors[3]}
                        title="outros"
                        percentage={15}
                    />
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App