import { useEffect } from "react";
import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function Nav() {
    const [theme, setTheme] = useState("light");


    const handleTheme = (e) => {

        if (e.target.checked) {
            setTheme("synthwave");
            localStorage.setItem("value", true);
            localStorage.setItem("theme", "synthwave");


        } else {
            setTheme("light");
            localStorage.setItem("value", false);
            localStorage.setItem("theme", "light");


        }
    };
    useEffect(() => {
        const value = localStorage.getItem("value");
        const parseValue = JSON.parse(value);

        if (parseValue) {
            setTheme("synthwave")
        }
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            <div className="navbar bg-base-100 shadow-xl p-4 fixed top-0 z-10 *:font-semibold *:text-xl">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">myProjects</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 flex gap-4 mr-3">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-green-200" : "text-black"}>Home</NavLink>
                        <NavLink to="/jobs" className={({ isActive }) => isActive ? "text-green-200" : "text-black"}>Jobs</NavLink>
                        <NavLink to="/applied-jobs" className={({ isActive }) => isActive ? "text-green-200" : "text-black"}>Applied Jobs</NavLink>
                        <NavLink to="/nested-routes" className={({ isActive }) => isActive ? "text-green-200" : "text-black"}>Nested Routes</NavLink>
                    </ul>
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" checked={theme === "synthwave"} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" onChange={handleTheme} />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    )
}
