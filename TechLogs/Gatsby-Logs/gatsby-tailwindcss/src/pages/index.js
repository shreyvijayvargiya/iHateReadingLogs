import React from 'react';


const IndexPage = () => {
  return (
    <div className="text-center py-20 mx-auto ">
      <p className="text-4xl">Welcome to <a className="underline" href="https://www.ihatereadingin">iHateReading</a></p>
      <img src="./demo.png" className="my-4 w-6/12 h-60 object-center object-contain mx-auto" /> 
      <hr />
      <div className="w-6/12 mx-auto mt-20 p-10 bg-yellow-100 rounded-xl text-left">
        <p>This repository is the boilerplate for Gatsby with Tailwind CSS.</p>
        <p> We have already completed all the installation processes so that you only have to take care the development part</p>
      </div>
      <br />
      <a href="">Read here the detailed process, how to install tailwind CSS in Gatsby</a>
      <p>For more such boilerplates <a href="https://www.ihatereading.in/repos" className="underline text-green-600" >reach here</a></p>
    </div>
  );
};
export default IndexPage;
