const PrimaryButton = ({ to, text, primary = true }) => {
  return (
    <a
      href={to}
      className={`px-5 py-2 m-3 font-semibold rounded-lg duration-300 ${
        primary
          ? "bg-blue-300 hover:bg-blue-100 border-2 border-blue-100"
          : "bg-blue-100 hover:bg-blue-300 border-2 border-blue-300"
      }`}
    >
      {text}
    </a>
  );
};

export default PrimaryButton;
