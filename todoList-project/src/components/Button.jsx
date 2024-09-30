// eslint-disable-next-line react/prop-types
function Button({ onClick, label }) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;