import "./App.css";
import Layout from "./components/Layout";
import smallChart from "./assets/icons/small-chart.svg";
import bigChart from "./assets/icons/big-chart.svg";
import arrow from "./assets/icons/arrow.svg";
import searchIcon from "./assets/icons/search.svg";

function App() {
  return (
    <Layout>
      <div className="p-8 flex flex-col gap-8  mt-16 w-full">
        <div
          datatype="metrics-card"
          className="flex justify-between w-full gap-8"
        >
          <div className="flex gap-1 w-1/2">
            <div className="h-[75px] lg:w-1/2 bg-white flex justify-between items-center p-4 ">
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
            <div className="h-[75px] lg:w-1/2 bg-white flex justify-between items-center p-4 ">
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
          <div className="flex gap-1 w-1/2">
            <div className="h-[75px] lg:w-1/2 bg-white flex justify-between items-center p-4 ">
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
            <div className="h-[75px] lg:w-1/2 bg-white flex justify-between items-center p-4 ">
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

        <div datatype="chart-cards" className="h-[329px] flex gap-1 w-full">
          <div className="bg-white flex items-end w-4/5">
            <div>
              <p>Today: {new Date().toDateString()}</p>
              <div>
                <img src={bigChart} alt="big chart" className="w-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 w-2/5">
            <div className=" bg-white p-5 flex  flex-col gap-2 justify-center">
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
            <div className=" bg-white p-5 flex  flex-col gap-2 justify-center">
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

        <div
          datatype="table-top"
          className="flex flex-col justify-start items-start gap-8"
        >
          <p className="text-[36px] leading-[48px]">Payments</p>
          <div className="flex justify-between items-center w-3/4">
            <div datatype="pagination" className="flex gap-2">
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
              className="flex items-center gap-2 border-b border-[#787878] w-[336px] pb-2"
            >
              <img src={searchIcon} alt="" srcset="" />
              <input
                placeholder="Search payments"
                className="bg-transparent outline-none"
              />
            </div>
            <div datatype="fillter">
              <select>
                <option>All</option>
                <option>Reconcilled</option>
                <option>Un-reconcilled</option>
                <option>Settled</option>
                <option>Unsettled</option>
              </select>
            </div>
          </div>
        </div>

        <div datatype="data-table" className="w-full">
          <table className="w-full bg-white rounded-sm">
            <thead className="bg-[#EAEEF0] text-[#7F8FA4]">
              <tr className="text-[14px] h-[42px]">
                <th className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left">
                  <div className="pl-6">Item Type</div>
                </th>
                <th className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left">
                  Price
                </th>
                <th className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left">
                  Transaction No
                </th>
                <th className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left">
                  Time
                </th>
                <th className="text-[14px] text-[#7F8FA4]  leading-[19px] text-left">
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
                    <div className="border border-[#CCCFD4] rounded-[30px] flex items-center h-[33px] w-[120px] justify-center gap-2">
                      <div className="w-[9px] h-[9px] rounded-full bg-[#27AE60] "></div>
                      <p className="text-[#27AE60]">Reconcilled</p>
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

        <div datatype="footer" className="flex  justify-between">
          <div>Showing 1 to 10 of 500 entries</div>

          <div datatype="pagination" className="flex gap-0">
            <p className="border border-[#CED0DA] w-[72px] h-[29px] grid justify-center cursor-pointer">
              Previous
            </p>
            <p className="border border-[#CED0DA h-[29px] w-[31px] bg-[#1875F0] text-white grid justify-center cursor-pointer">
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
