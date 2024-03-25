import { NavLink, Outlet } from "react-router-dom";

export default function NestedRouts() {
    return (
        <div className="min-h-screen flex items-center justify-center container m-auto flex-col">
            <div className="border p-10">
                <h1>This is a Main Element of nested</h1>
                <NavLink to="/nested-routes/new-tab">Go Another Page</NavLink>
            </div>
            <div className="min-h-96">
                <Outlet></Outlet>
            </div>
            <div className="border p-10">
                <h1>This is Footer element</h1>
            </div>

        </div>
    )
}
