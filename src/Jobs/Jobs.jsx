import { useEffect, useState } from 'react'
import Job from '../Job/Job';
// import { useLoaderData, useParams } from 'react-router-dom';

export default function Jobs() {


    const [jobsData, setJobsData] = useState([]);
    const [dataLength, setLength] = useState(4);


    useEffect(() => {
        fetch("/featuredJobsData.json").then(res => res.json()).then(data => setJobsData(data))
    }, []);


    return (
        <div className='my-12'>
            <div className="text-center space-y-4">
                <h1 className="text-3xl lg:text-5xl font-black ">Featured Jobs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dicta?</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto my-5 '>
                {
                    jobsData.slice(0, dataLength).map(item => <Job key={item.id} job={item}></Job>)

                }


            </div>
            <button className={`btn ${dataLength > 4 ? "hidden" : " "} m-auto block`} onClick={() => setLength(jobsData.length)}  >Show all</button>


        </div>
    )
}
