import "./App.css";
import Layout from "./components/Layout";
import smallChart from "./assets/icons/small-chart.svg";
import bigChart from "./assets/icons/big-chart.svg";
import arrow from "./assets/icons/arrow.svg";
import blueArrow from "./assets/icons/blue-arrow.svg";
import searchIcon from "./assets/icons/search.svg";
import leftArrow from "./assets/icons/left-arrow.svg";
import rightArrow from "./assets/icons/right-arrow.svg";
import React from "react";

function App() {
  const [showFilter, setShowFilter] = React.useState(false);
  const [currentFilter, setCurrentFilter] = React.useState("All");

  return (
    <Layout>
      <div className="lg:p-8 p-2 md:p-4 flex flex-col gap-10 md:gap-5 lg:mt-16 md:mt-14 w-full overflow-x-hidden  mt-16">
        {/* Mertics card begins here */}
        <div
          datatype="metrics-card"
          className="flex justify-between w-full lg:gap-8 lg:flex-row  md:flex-col md:gap-1 md:w-full flex-col gap-1"
        >
          <div className="flex gap-1 lg:w-1/2  md:w-full">
            <div className="h-[75px] lg:w-1/2 bg-white flex justify-between items-center p-4 md:w-1/2">
              <div>
                <p className="text-[12px] leading-[16px] text-[#787C90] ">
                  Daily Transaction Volume
                </p>
                <p className="text-left font-semibold text-[18px] leading-[24px]  text-[#262626]">
                  2,342
                </p>
              </div>
              <div>
                <img src={smallChart} alt="small-chart" />
              </div>
            </div>
            <div className="h-[75px] lg:w-1/2 bg-white flex justify-between items-center p-4 md:w-1/2">
              <div>
                <p className="text-[12px] leading-[16px] text-[#787C90] ">
                  Daily Transaction Value
                </p>
                <p className="text-left font-semibold text-[18px] leading-[24px]  text-[#262626]">
                  ₦4,000,000
                </p>
              </div>
              <div>
                <img src={smallChart} alt="small-chart" />
              </div>
            </div>
          </div>
          <div className="flex gap-1 lg:w-1/2 md:w-full">
            <div className="h-[75px] lg:w-1/2 bg-white flex justify-between items-center p-4  md:w-1/2">
              <div>
                <p className="text-[12px] leading-[16px] text-[#787C90] ">
                  Total Transaction Volume
                </p>
                <p className="text-left font-semibold text-[18px] leading-[24px]  text-[#262626]">
                  452,000
                </p>
              </div>
              <div>
                <img src={smallChart} alt="small-chart" />
              </div>
            </div>
            <div className="h-[75px] lg:w-1/2 bg-white flex justify-between items-center p-4  md:w-1/2">
              <div>
                <p className="text-[12px] leading-[16px] text-[#787C90] ">
                  Total Transaction Value
                </p>
                <p className="text-left font-semibold text-[18px] leading-[24px]  text-[#262626]">
                  ₦4,000,000
                </p>
              </div>
              <div>
                <img src={smallChart} alt="small-chart" />
              </div>
            </div>
          </div>
        </div>
        {/* This  is where chart section starts from */}
        <div
          datatype="chart-cards"
          className=" flex gap-4 w-full md:flex-col  lg:flex-row flex-col"
        >
          <div
            className={` bg-white  flex flex-col justify-between lg:w-4/5  md:h-[230px] lg:h-auto h-[210px]  md:w-full relative`}
          >
            <div className="flex justify-between items-center p-2 lg:p-5 md:p-5">
              <p className="text-[10px] lg:text-[16px] md:text-[16px] font-Roboto">
                <strong>Today: {new Date().toDateString()}</strong>
              </p>
              <div className="w-[138px] h-[31px] rounded-[4.25px] border border-[#DDE0E3] flex justify-between items-center px-2">
                <p className="text-[12px] leading-[16px] text-[#7F8FA4]">
                  1 Jan - 1 Jun
                </p>
                <img src={arrow} alt="arrow" className="opacity-20" />
              </div>
              <div className="flex gap-3">
                <div className="w-[29.36px] h-[22.97px] border border-[#DDE0E3] grid justify-center">
                  <img src={leftArrow} alt="" className="opacity-20" />
                </div>
                <div className="w-[29.36px] h-[22.97px] border border-[#DDE0E3] grid justify-center">
                  <img src={rightArrow} alt="" className="opacity-20" />
                </div>
              </div>
            </div>
            <div className="flex justify-between p-5  absolute right-0 left-0 lg:top-[5rem] md:top-[4rem]  top-[4.5rem]">
              <p className="font-bold">Jan</p>
              <div className="border md:h-[120px] lg:h-[200px] h-[95px] w-[1.4px] border-[#CFE8FB]"></div>
              <p className="font-bold">Feb</p>
              <div className="border md:h-[120px] lg:h-[200px] h-[95px] w-[1.4px] border-[#CFE8FB]"></div>
              <p className="font-bold">Mar</p>
              <div className="border md:h-[120px] lg:h-[200px] h-[95px] w-[1.4px] border-[#CFE8FB]"></div>
              <p className="font-bold">Apr</p>
              <div className="border md:h-[120px] lg:h-[200px] h-[95px] w-[1.4px] border-[#CFE8FB]"></div>
              <p className="font-bold">May</p>
              <div className="border md:h-[120px] lg:h-[200px] h-[95px] w-[1.4px] border-[#CFE8FB]"></div>
              <p className="font-bold">Jun</p>
            </div>
            <div className="self-end">
              <img
                src={bigChart}
                alt="big chart"
                className="w-screen relative"
              />
            </div>
          </div>

          <div className="flex lg:flex-col md:flex-row gap-3 lg:w-3/6 md:w-full flex-col">
            <div className=" bg-white p-5 flex  flex-col gap-2 justify-center md:w-1/2 lg:w-full">
              <div className="text-[14px] leading-[16px] text-[#262626] font-extrabold">
                Orders
              </div>
              <div className="w-[95%]  bg-[#FDC203] rounded-full h-1 dark:bg-[#FDC203]">
                <div
                  className="bg-[#27AE60] h-1 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <p>
                Pending Orders:{" "}
                <span className="font-extrabold text-[#EBC315]">20</span>
              </p>
              <p>
                Reconcilled Orders:{" "}
                <span className="font-extrabold text-[#27AE60]">80</span>
              </p>
              <p>
                Total Orders:{" "}
                <span className="font-extrabold text-[#1860EC]">100</span>
              </p>
            </div>
            <div className=" bg-white p-5 flex  flex-col gap-2 justify-center md:w-1/2  lg:w-full">
              <p>Payments</p>
              <div className="w-[95%] bg-[#FDC203] rounded-full h-1 dark:bg-[#FDC203]">
                <div
                  className="bg-[#27AE60] h-1 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <p>
                Un-reconcilled Payments:{" "}
                <span className="font-extrabold text-[#EBC315]">20</span>
              </p>
              <p>
                Reconcilled Payments:{" "}
                <span className="font-extrabold text-[#27AE60]">80</span>
              </p>
              <p>
                Total Payments:{" "}
                <span className="font-extrabold text-[#1860EC]">100</span>
              </p>
            </div>
          </div>
        </div>
        {/* Table top actions here */}
        <div
          datatype="table-top"
          className="flex flex-col lg:justify-start justify-between items-start gap-2 md:gap-2"
        >
          <p className="text-[36px] leading-[48px]">Payments</p>
          <div className="flex lg:justify-between justify-between items-center lg:w-3/4 md:w-full md:justify-start  md:gap-12 w-full">
            <div
              datatype="pagination"
              className="flex items-center gap-1 md:text-[12px] lg:text-[14px] text-[13px]"
            >
              <p>Showing</p>
              <select>
                <option>20</option>
                <option>40</option>
                <option>60</option>
                <option>80</option>
                <option>100</option>
              </select>
              <p>out of 500 payments</p>
            </div>

            <div
              datatype="search"
              className="lg:flex items-center gap-2 border-b border-[#787878] lg:w-[336px] md:w-[96px] pb-2  hidden"
            >
              <img src={searchIcon} alt="search-icon" />
              <input
                placeholder="Search payments"
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className=" relative ">
              <div className="flex items-center lg:gap-4 gap-2">
                <p>Show</p>
                <div
                  className="lg:w-[150px] md:w-[150px] w-[105px] h-[35px] border border-[#CED0DA] flex justify-between items-center cursor-pointer px-2"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <p className="text-[12px]">{currentFilter}</p>
                  <img src={blueArrow} alt="arrow" />
                </div>
              </div>
              {showFilter && (
                <div className="h-[165px] lg:w-[150px] md:w-[150px] w-[105px] rounded-b-lg  border border-[#CED0DA] absolute right-0 bg-white flex justify-between flex-col ">
                  {filters.map((filter, index) => (
                    <p
                      key={index}
                      className="h-[33px] hover:bg-[#F4F4F4] cursor-pointer px-2 text-[12px]"
                      onClick={() => {
                        setCurrentFilter(filter);
                        setShowFilter(false);
                      }}
                    >
                      {filter}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Table that displays  the payments information */}
        <div
          datatype="data-table"
          className="lg:w-full md:overflow-y-scroll md:w-[540px]  w-full overflow-y-scroll"
        >
          <table className="lg:w-full bg-white rounded-sm md:w-[688px] w-[740px] ">
            <thead className="bg-[#EAEEF0] text-[#7F8FA4] table-auto">
              <tr className="text-[14px] h-[42px]">
                <th className="text-[14px] text-[#7F8FA4]  font-thin font-sagoe leading-[19px] text-left">
                  <div className="pl-6">Item Type</div>
                </th>
                <th className="text-[14px] text-[#7F8FA4]  font-thin  leading-[19px] text-left">
                  Price
                </th>
                <th className="text-[14px] text-[#7F8FA4]  font-thin  leading-[19px] text-left">
                  Transaction No
                </th>
                <th className="text-[14px] text-[#7F8FA4]  font-thin  leading-[19px] text-left">
                  Time
                </th>
                <th className="text-[14px] text-[#7F8FA4]  font-thin  leading-[19px] text-left">
                  Status
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(9)].map((x, i) => (
                <tr
                  key={i}
                  className="border-b border-solid border-[#CCCFD4] h-[56px]"
                >
                  <td className="text-[14px] text-[#414042]  leading-[19px] text-left flex items-center gap-2 py-2  pl-6">
                    <div className=" w-[36px]  h-[36px] rounded-full bg-[#7F8FA4] text-white grid items-center justify-center">
                      VW
                    </div>{" "}
                    <div>Apple Mac Book 15” 250 SSD 12GB</div>
                  </td>
                  <td className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left">
                    $73430
                  </td>
                  <td className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left">
                    1234567890
                  </td>
                  <td className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left">
                    12:30
                  </td>
                  <td className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left ">
                    <div className="border border-[#CCCFD4] rounded-[30px] flex items-center h-[33px] w-[126px] pl-2 gap-2">
                      <div
                        className={`w-[9px] h-[9px] rounded-full ${
                          i === 1 || i === 4 || i === 8
                            ? " bg-[#EBC315]"
                            : i === 5 || i === 7
                            ? "bg-[#C4C4C4]"
                            : "bg-[#27AE60]"
                        }`}
                      ></div>
                      <p
                        className={`${
                          i === 1 || i === 4 || i === 8
                            ? "text-[#EBC315]"
                            : i === 5 || i === 7
                            ? "text-[#7F8FA4]"
                            : "text-[#27AE60]"
                        }`}
                      >
                        {i === 1 || i === 4 || i === 8
                          ? "Pending"
                          : i === 5 || i === 7
                          ? "Un-reconcilled"
                          : "Reconcilled"}
                      </p>
                    </div>
                  </td>
                  <td className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left ">
                    <img src={arrow} alt="big chart" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination section */}
        <div datatype="footer" className="flex  justify-between">
          <div className="text-[14px]">Showing 1 to 10 of 500 entries</div>

          <div datatype="pagination" className="flex gap-0">
            <p className="border border-[#CED0DA] w-[72px] h-[29px] grid justify-center cursor-pointer">
              Previous
            </p>
            <p className="border border-[#CED0DA h-[29px] w-[31px] border border-[#1875F0]  bg-[#1875F0] text-white grid justify-center cursor-pointer">
              1
            </p>
            <p className="border border-[#CED0DA h-[29px] w-[31px]  grid justify-center cursor-pointer">
              2
            </p>
            <p className="border border-[#CED0DA h-[29px] w-[49px]  grid justify-center cursor-pointer">
              Next
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
const filters = [
  "All",
  "Reconcilled",
  "Un-reconcilled",
  "Settled",
  "Unsettled",
];
