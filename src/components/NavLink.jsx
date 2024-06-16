import { Link } from "react-router-dom";
const NavLink = (props) => {
  return (
    <li className="group relative">
      <Link
        to={props.href}
        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 lg:ml-7 xl:ml-12"
        onClick={props.func}
      >
        {props.tag}
      </Link>
    </li>
  );
};
export default NavLink;
