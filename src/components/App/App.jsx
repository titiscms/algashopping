import React, { useState } from 'react'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import { Wrapper, Container } from './App.styles'
import Checkbox from '../../shared/Checkbox/Checkbox'

function App() {
    const [ lettuce, setLettuce ] = useState(true)
    const [ rice, setRice ] = useState(false)

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
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App