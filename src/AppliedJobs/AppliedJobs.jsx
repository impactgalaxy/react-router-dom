import { useLoaderData } from "react-router-dom"
import { getDataFormLocalStorage } from "../Utility";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";

export default function AppliedJobs() {
    const applied = useLoaderData();
    const [d, setD] = useState([]);
    const [display, setDisplay] = useState([]);

    const handleFilter = (param) => {
        if (param === "Remote") {
            const remote = d.filter(item => item.category === "Remote")
            setDisplay(remote);
        } else if (param === "Office") {
            const office = d.filter(item => item.category === "Office");
            setDisplay(office);
        } else {
            setDisplay(d);
        }
    }

    useEffect(() => {
        const local = getDataFormLocalStorage();
        const data = applied.filter(item => local.includes(item.id))
        setD(data);
        setDisplay(data)
    }, [applied])
    console.log(display);

    return (

        <div>
            <div className="min-h-[350px] bg-bg1 bg-left-top bg-no-repeat bg-cover flex items-center justify-center border">
                <h1 className="text-6xl">Applied Jobs</h1>
            </div>
            <details className="dropdown float-right p-8">
                <summary className="m-1 btn btn-primary">Filter by</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter("All")}><a>All</a></li>
                    <li onClick={() => handleFilter("Remote")}><a>Remote Job</a></li>
                    <li onClick={() => handleFilter("Office")}><a>Office Job</a></li>
                </ul>
            </details>
            <div className="p-4 lg:p-8 container m-auto my-6 grid grid-cols-2 gap-4">
                {
                    display.map(item => <AppliedJob key={item.id} jobs={item}></AppliedJob>)
                }
            </div>
        </div>
    )
}
