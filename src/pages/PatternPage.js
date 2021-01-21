import React from 'react'
import PatternComponent from '../components/PatternComponent/PatternComponent'
import { useDispatch, useSelector } from 'react-redux'
import { updateHeader } from '../store/actions/patternActions';


export default function PatternPage() {

    const state = useSelector(state => state.pattern)
    const dispatch = useDispatch();
    const handleClick = () => {
        const currentDate = new Date();
        dispatch(updateHeader(currentDate.toString()))
    }
    return (
        <div>
            <PatternComponent 
                header={state.header}
                handleClick={handleClick}
            />
        </div>
    )
}
