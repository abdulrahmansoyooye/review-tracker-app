import { useNavigate } from "react-router-dom";

const Barchart = () => {
  const navigate = useNavigate();

  const BarChartData = [
    {
      value1: 10.1875,
      value2: 5.9375,
      day: "Mon",
    },
    {
      value1: 7.1875,
      value2: 4.5,
      day: "Tue",
    },
    {
      value1: 7.1875,
      value2: 5.9375,
      day: "Wed",
    },
    {
      value1: 8.9375,
      value2: 6.75,
      day: "Thurs",
    },
    {
      value1: 22.6875,
      value2: 5.9375,
      day: "Fri",
    },
    {
      value1: 22.6875,
      value2: 5.9375,
      day: "Sat",
    },
    {
      value1: 22.6875,
      value2: 5.9375,
      day: "Sun",
    },
  ];
  return (
    <div
      className="p-[1.25rem] cursor-pointer  bg-[#FCFCFC] rounded-[0.9375rem] flex flex-col space-y-[6.5em]"
      onClick={() => navigate("/reviews")}
    >
      {/* Top Layer*/}
      <div className="flex max-md:flex-col justify-between max-md:gap-[0.94rem] gap-[18.69rem]">
        <h1>Review History</h1>
        <div className="flex gap-[0.62rem] max-md:flex-col">
          <div className="flex gap-[0.38rem] items-center">
            <div className="w-[0.8125rem] rounded-[6.5rem] h-[0.8125rem] bg-[#6C5DD3]"></div>
            <p className="text-[#808191] font-[600]">Last Month</p>
          </div>
          <div className="flex gap-[0.38rem] items-center">
            <div className="w-[0.8125rem] rounded-[6.5rem] h-[0.8125rem] bg-[#CFC8FF]"></div>
            <p className="text-[#808191] font-[600]">Running Month</p>
          </div>
        </div>
      </div>
      {/* Bottom Layer */}
      <div className="flex gap-[1.75rem]">
        {/* Numbers */}
        <div className="flex flex-col gap-[1.9rem]">
          {["800k", "600k", "400", "200k", "0k"].map((item, index) => (
            <div key={item + index}>
              <p
                className="text-[#808191] font-[400] text-[0.75rem]"
                key={`name-${index}`}
              >
                {item}
              </p>
            </div>
          ))}
          <div></div>
        </div>
        {/* Chart */}
        <div className="flex gap-[2.19rem] overflow-hidden">
          {BarChartData.map(({ day }, index) => (
            <div key={day + index}>
              <div
                className="flex flex-col justify-end  gap-[0.62rem]"
                key={`name-${index}`}
              >
                <div className="flex gap-[0.19rem] items-end ">
                  <div
                    className={`w-[1.75rem] h-[10rem] rounded-[0.25rem] bg-[#475BE8]`}
                    data-aos="zoom-out"
                    data-aos-delay={`${index}00`}
                  ></div>
                  <div
                    className={`w-[1.75rem] h-[5rem] rounded-[0.25rem] bg-[#CFC8FF]`}
                    data-aos="zoom-out"
                    data-aos-delay={`${index + 3}00`}
                  ></div>
                </div>

                <p className="text-[#808191] font-[400]">{day}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Barchart;
