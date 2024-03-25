import { useEffect, useState } from "react"

export default function JobCategory() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetch("/jobCategoryData.json")
      .then(res => res.json())
      .then(data => setJobData(data))

  }, [])
  return (
    <div >
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-5xl font-black ">Job Category</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius, ipsa facilis magni laboriosam asperiores?</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 p-4 lg:p-8 container m-auto gap-3">
        {
          jobData.map((item, idx) => {
            return (
              <div key={idx} className="bg-slate-100 p-2 lg:p-6 rounded-2xl">
                <img src={item.img} alt="" />
                <h3 className="text-xl">{item.title}</h3>
                <p>{item.description}</p>

              </div>

            )
          })
        }
      </div>

    </div>
  )
}
