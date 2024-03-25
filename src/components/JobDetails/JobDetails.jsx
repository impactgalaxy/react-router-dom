// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { saveDataToLocalStorage } from "../../Utility";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function JobDetails() {
    const { id } = useParams();
    const myData = useLoaderData();

    const filterData = myData.filter(item => item.id === parseInt(id));

    const saveLocalStorage = () => {

        saveDataToLocalStorage(parseInt(id), toast);
        // const saveData = localData.push(JSON.stringify(id));

    }




    return (
        <div >
            <div className="min-h-[350px] bg-bg1 bg-left-top bg-no-repeat bg-cover flex items-center justify-center border">
                <h1 className="text-6xl">Job Details</h1>
            </div>
            <div className="flex container m-auto p-5 lg:p-10 *:p-4 *:lg:w-1/2">
                <div >
                    <h1><span className="font-bold text-2xl">Job Details:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste delectus rem cupiditate. Cupiditate sint, sed quae dolorum officiis quod dolor vel voluptatum aut labore reprehenderit iure, ex necessitatibus corrupti?</h1>
                    <h1><span className="font-bold text-2xl">Job Title:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste delectus rem cupiditate. Cupiditate sint, sed quae dolorum officiis quod dolor vel voluptatum aut labore reprehenderit iure, ex necessitatibus corrupti?</h1>
                    <h1><span className="font-bold text-2xl">Job Requirement:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste delectus rem cupiditate. Cupiditate sint, sed quae dolorum officiis quod dolor vel voluptatum aut labore reprehenderit iure, ex necessitatibus corrupti?</h1>
                    <h1><span>Experience: </span>4 Years</h1>
                </div>
                <div >
                    {
                        filterData.map(item => {
                            return (
                                <div key={item.id} className="px-10 space-y-4">
                                    <h1 className="font-black border-b-2 mb-3">Job Details</h1>
                                    <h1>Job Title: {item.title}</h1>
                                    <h1 className="border-b-2">Salary: {item.salary}</h1>
                                    <button className="btn btn-accent" onClick={saveLocalStorage}>Apply Now</button>

                                </div>
                            )
                        })
                    }

                </div>


            </div>
            <ToastContainer></ToastContainer>


        </div>
    )
}
