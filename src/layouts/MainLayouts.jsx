import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function MainLayouts() {
    return (
        <div>
            <div className="min-h-20">
                <Nav></Nav>
            </div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>


        </div>
    )
}
