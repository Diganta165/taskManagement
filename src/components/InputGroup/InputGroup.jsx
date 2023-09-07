import PropTypes from 'prop-types';

const InputGroup = ({inputFor, type, labelVal, val, handleInput}) => {
    return (
        <>
            <div className='flex flex-row gap-4'>
                <label htmlFor={inputFor} >{labelVal}: </label>
                <input type={type} placeholder = {`Enter your ` + inputFor} id={inputFor} name={inputFor} value={val}
                    onChange={handleInput}
                    className='min-w-[220px] border-solid border-2 border-black'
                />
            </div>
        </>
    );
};

InputGroup.propTypes = {
    inputFor: PropTypes.string,
    type: PropTypes.string,
    labelVal: PropTypes.string,
    val :PropTypes.string,
    handleInput: PropTypes.func
};

export default InputGroup;