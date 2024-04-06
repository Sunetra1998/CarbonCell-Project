import { FaHamburger } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FaEllipsisVertical } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-container bg-gray">
      <div className="sidebar-container_header bg-gray">
        <h3 className="bg-gray">Carbon Cell</h3>
        <FaHamburger className="bg-gray" />
      </div>
      <div className="sidebar-container_body bg-gray">
        <div className="sidebar-container_body__search">
          <input
            type="text"
            className="bg-gray empty"
            placeholder="Search..."
          />
        </div>
        <div className="sidebar-container_body__navigation">
          <ul className="navigation-container">
            <li className="navigation-container__item bg-gray">
              <NavLink to="/" activeClassName="active-link">
                <FaHome className="bg-gray icon" size={24} />
                <p className="bg-gray hide-mobile">Home</p>
              </NavLink>
            </li>
            <li className="navigation-container__item bg-gray">
              <NavLink to="/populationtracker" activeClassName="active-link">
                <FaPeopleGroup className="bg-gray icon" size={24} />
                <p className="bg-gray hide-mobile">Population Tracker</p>
              </NavLink>
            </li>

            <li className="navigation-container__item bg-gray">
              <NavLink to="/crypto" activeClassName="active-link">
                <FaLaravel className="bg-gray icon" size={24} />
                <p className="bg-gray hide-mobile">Crypto Rates</p>
              </NavLink>
            </li>
            <li className="navigation-container__item bg-gray">
              <NavLink to="/wallet" activeClassName="active-link">
                <FaWallet className="bg-gray icon" size={24} />
                <p className="bg-gray hide-mobile">Wallet</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-container_footer bg-gray">
        <div className="sidebar-container_footer__contact1">
          <ul className="footer-item_container">
            <li className="footer-item_container__item bg-gray">
              <IoMdNotifications className="bg-gray icon" size={30} />
              <p className="bg-gray hide-mobile">Notifications</p>
            </li>
            <li className="footer-item_container__item bg-gray">
              <MdContactSupport className="bg-gray icon" size={30} />
              <p className="bg-gray hide-mobile">Support</p>
            </li>
            <li className="footer-item_container__item bg-gray">
              <CiSettings className="bg-gray icon" size={30} />
              <p className="bg-gray hide-mobile">Settings</p>
            </li>
          </ul>
        </div>
        <div className="sidebar-container_footer__contact2">
          <div className="avatar-container">
            <RxAvatar className="icon" size={30} />
          </div>
          <div className="contact-info hide-mobile">
            <p>Sunetra Das</p>
            <p>dassunetra582@gmail.com</p>
          </div>
          <div className="ellipsis hide-mobile">
            <FaEllipsisVertical className="icon" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
