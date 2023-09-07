import PropTypes from 'prop-types';

const Button = ({type, content, clickHandler}) => {
    const buttonTypes ={
        sideBar:{
            color: "#000",
            backgroundColor: "#f7ede2"
        },
        cancel:{
            color: "#fff",
            backgroundColor: "#ed2939"
        },
        submit:{
            color: "#fff",
            backgroundColor: "#09ee90"
        }
    }

    return (
        <>
            <button className='rounded-full p-4'
                style={{
                color: buttonTypes[type].color, 
                backgroundColor: buttonTypes[type].backgroundColor
                }}
                onClick={clickHandler}
                >{content}
            </button>
        </>
    );
};

Button.propTypes = {
    // inputFor: PropTypes.string,

};

export default Button;