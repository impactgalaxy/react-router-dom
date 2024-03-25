import { CiLocationOn } from "react-icons/ci";
import { HiCurrencyDollar } from "react-icons/hi2";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export default function Job({ job }) {
    const { id, title, description, salary, location, img, category, job_hour } = job || {};

    return (
        <div className="card bg-base-100 shadow-xl p-4 lg:p-8">
            <img src={img} alt="Shoes" className="w-1/4 object-cover" />
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions ">
                    <button className="btn ">{category}</button>
                    <button className="btn">{job_hour}</button>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center"><CiLocationOn className="text-2xl"></CiLocationOn> <p>{location}</p></div>
                    <div className="flex items-center gap-2"><HiCurrencyDollar className="text-2xl"></HiCurrencyDollar> <p>Salary: {salary}</p></div>
                </div>
                <Link to={`/job-details/${id}`}><button className="btn btn-primary">View Details</button></Link>
            </div>
        </div>
    )
}

Job.propTypes = {
    job: PropTypes.object.isRequired,
    handleJob: PropTypes.func
}
