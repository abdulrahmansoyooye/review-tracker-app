const ButtonComponent = ({ color, children }) => {
  return (
    <div
      className={`bg-[${color}] p-[1rem] flex flex-col text-[#Fcfcfc]  cursor-pointer font-[600] rounded-[1rem] text-center hover:bg-[#3a50f0] hover:scale-[1.2] transition-all duration-100`}
    >
      <button type="submit ">{children}</button>
    </div>
  );
};

export default ButtonComponent;
