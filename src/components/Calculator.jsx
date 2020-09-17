import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { subtract, sum } from '../store/Calculator/Calculator.actions'

function Calculator () {
    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)    

    return <>
        <input 
            type="number" 
            placeholder="a"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
        />
        <input 
            type="number" 
            placeholder="b"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
        />

        <button
            onClick={() => {
                dispatch(sum(a, b))
            }}
        >Somar</button>

        <button
            onClick={() => {
                dispatch(subtract(a, b))
            }}
        >Subtrair</button>

        <div>
            { result }
        </div>
    </>
}

export default Calculator

/* forma antiga de conectar 
import { connect } from 'react-redux'

function Calculator ({ result }) {
    return <>
        <input type="text" placeholder="a" />
        <input type="text" placeholder="b" />

        <button>Somar</button>
        <button>Subtrair</button>

        <div>
            { result }
        </div>
    </>
}

function mapStateToProps (state) {
    return {
        result: state.calculator
    }
}

export default connect (mapStateToProps) (Calculator) */