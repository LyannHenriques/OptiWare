import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="sm:text-xl font-bold py-2 md:text-2xl text-lg">
            Want To Optimize Your Flow ?
          </h1>
          <p>Sign up and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className="flex flex-col sm:flex-row w-full items-center justify-between">
            <input
              type="email"
              placeholder="Enter Email"
              className="rounded-md flex w-full p-2 "
            />
            <button className="bg-[#3339b4] sm:flex-row items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2 ml-4 font-medium rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
