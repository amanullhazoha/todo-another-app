/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
const Button = ({ type, text, ...rest }) => (
    <button type={type} {...rest}>
        {text}
    </button>
);

export default Button;
