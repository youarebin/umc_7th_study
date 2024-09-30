// eslint-disable-next-line react/prop-types
function Input({ value, onChange }) {
    return (
        <input 
            type='text' 
            value={value} 
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default Input;