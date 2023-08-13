import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
            name: action.nextName,
            age: state.age
            };
        }
    }
    throw Error('Unknown action.');
}
const initialState = { name: 'Ramesh Solanki', age: 28 };

const UseReducerEx = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        })
    }

    function handleBtnClick() {
        dispatch({
            type: 'incremented_age'
        })
    }

    return (
        <>
          <h1 className="text-2xl mb-4">UseReducer Demo</h1>
          <input value={state.name}
        onChange={handleInputChange} type="text" className="flex items-start mb-2 border border-gray-300 p-1 px-2"/>
          <button onClick={handleBtnClick} 
          className='p-1 px-2 mb-4 mt-4  border border-gray-200' type="button">Increment age</button>
          <p>Name: {state.name},  age: {state.age}.</p>
        </>
    )
}

export default UseReducerEx