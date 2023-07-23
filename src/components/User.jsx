import Props from "./Props";
import propTypes from 'prop-types';

const User = ({name, age})=> {
    return (
        <>
        <h1>{name}</h1>
        <p>{age}</p>
        <Props name={name} />
        </>
    )
}

User.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

User.defaultProps = {
    name: "Name",
    age: 0
}

export default User