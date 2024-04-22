import Advert from "../components/Advert";
import Barchart from "../components/Barchart";
import ChartData from "../components/ChartData";
const Dashboard = () => {
  return (
    <div className="p-[1.56rem_1.75rem] flex flex-col overflow-hidden w-full gap-[1.25rem]">
      {/* Heading */}
      <div>
        <h1 className="text-[1.5265rem] font-[700]">Dashboard</h1>
      </div>
      {/* Overview Chart */}
      <div>
        <ChartData />
      </div>
      {/* Detailed Chart */}{" "}
      <div>
        <Barchart />
      </div>
      <Advert />
    </div>
  );
};

export default Dashboard;
