import DashBoardNav from "../dashboard-nav/dashboard-navbar.jsx";
import {Outlet} from "react-router-dom";

function LayoutDashBoard() {
   return (
       <>
           <nav>
               <DashBoardNav/>
           </nav>
           <main>
               <Outlet/>
           </main>
       </>
   )
}

export default LayoutDashBoard;