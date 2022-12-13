import Dropdown from "react-bootstrap/Dropdown";
import { BsPersonFill }  from "react-icons/bs"
import styles from "./Profile.module.scss"
const Profile = () => {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic" color="blue">
        <BsPersonFill/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Orders</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Profile;
