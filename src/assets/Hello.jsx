const Hello = ({name, message}) => {
  console.log(name, message)
  return (
  <div className = "App"> 
    <h1>
      {message} {name} 
      </h1>
       
  </div>
  );
};


import PropTypes from 'prop-types';

Hello.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string
};

Hello.defaultProps = {
  name: "User",
  message: "How are you?"
}
export default Hello;