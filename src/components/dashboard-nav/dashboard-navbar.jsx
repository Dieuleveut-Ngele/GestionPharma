import { NavLink } from "react-router-dom";

function DashBoardNav() {
    return (
        <ul className="navbar">
            <li>
                <NavLink to="/all-products">All products</NavLink>
            </li>
            <li>
                <NavLink to="/create-product"> Create Products</NavLink>
            </li>
            <li>
                <NavLink to="/update-product">Update product</NavLink>
            </li>
            <li>
                <NavLink to="/delete-product">Delete</NavLink>
            </li>
            <li>
                <NavLink to="/">Deconnexion</NavLink>
            </li>
        </ul>
    )
}
export default DashBoardNav;