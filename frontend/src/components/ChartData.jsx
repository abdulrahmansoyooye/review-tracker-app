import pieChart1 from "../assets/pieChart1.svg";
import pieChart2 from "../assets/pieChart2.svg";
import pieChart3 from "../assets/pieChart3.svg";
import pieChart4 from "../assets/pieChart4.svg";

const ChartData = () => {
  const chartData = [
    {
      name: "Properties for Sale",
      value: 684,
      picturePath: pieChart1,
    },
    {
      name: "Properties for Rent",
      value: 546,
      picturePath: pieChart2,
    },
    {
      name: "Total Customer",
      value: 684,
      picturePath: pieChart3,
    },
    {
      name: "Total city",
      value: 90,
      picturePath: pieChart4,
    },
  ];
  return (
    <div className="flex max-md:flex-col gap-[1.56rem] w-full justify-between flex-wrap ">
      {/* Each property */}
      {chartData.map(({ name, value, picturePath }, index) => (
        <div key={name + index}>
          <div
            className="p-[1.5rem_1.38rem] rounded-[0.9375rem] max-md:w-full bg-[#FCFCFC] flex gap-[0.81rem] justify-between -z-[1000]"
            data-aos="fade-up"
            data-aos-delay={`${index}00`}
          >
            {/* Row 1 */}
            <div className="flex flex-col gap-[0.5rem]">
              <p className="text-[#808191] text-[0.875rem]">{name}</p>
              <h1 className="text-[1.5rem]">{value}</h1>
            </div>
            {/* Row 2 */}
            <div>
              <img
                src={picturePath}
                alt="pieChart1"
                className="w-[3.75rem] h-[3.75rem]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartData;
