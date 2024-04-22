const ButtonComponent = ({ color, children }) => {
  return (
    <div
      className={`bg-[${color}] p-[1rem] flex justify-center text-[#Fcfcfc]  cursor-pointer font-[600] rounded-[1rem] text-center`}
    >
      <button type="submit">{children}</button>
    </div>
  );
};

export default ButtonComponent;
