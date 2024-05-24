/* eslint-disable react/prop-types */
const InputComponent = ({
  showName,
  name,
  EditProfile,
  type,
  data,
  setData,
  id,
}) => {
  return (
    <div className="flex flex-col w-full gap-[0.62rem]  ">
      {showName && <p className="text-[#808191] font-[400] w-full">{name}</p>}

      <input
        type={type}
        className="bg-[#FFFF] border focus:outline-[#475be8]  rounded-[0.375rem] p-[0.625rem] w-full"
        placeholder={`Your ${name}`}
        disabled={EditProfile}
        autoFocus
        required
        value={data[id]}
        onChange={(e) => {
          setData({ ...data, [id]: e.target.value });
        }}
      />
    </div>
  );
};

export default InputComponent;
