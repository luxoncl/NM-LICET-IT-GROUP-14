const Button = (props) => {
  return (
    <button className="p-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-4 border border-blue-500 hover:border-transparent rounded">
      {props.number}
    </button>
  );
};

export default Button;
