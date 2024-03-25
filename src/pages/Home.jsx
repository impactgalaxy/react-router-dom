import Jobs from "../Jobs/Jobs"
import JobCategory from "../components/JobCategory/JobCategory"

function Home() {
    return (
        <div>
            <div className="p-5 md:p-8 lg:p-12 flex gap-6 container m-auto *:w-1/2 items-center">
                <div className="p-4 lg:p-8 space-y-4">
                    <h1 className="text-3xl lg:text-5xl font-black">
                        One Step Closer To Your Dream Job
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi laboriosam, consequuntur dolore error iusto quos quas repellat tenetur! Amet ducimus ipsam vitae aliquam accusamus ullam repudiandae illo ipsum delectus eveniet!</p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
                <div className="min-h-[500px] bg-hero-pattern bg-no-repeat bg-center bg-cover">
                </div>
            </div>
            <div className="p-4 lg:my-10">
                <JobCategory></JobCategory>
            </div>
            <div>
                <Jobs></Jobs>
            </div>
        </div>
    )
}

export default Home
