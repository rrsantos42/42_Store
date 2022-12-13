import Dropdown from 'react-bootstrap/Dropdown';
import { BsPersonFill } from "react-icons/bs"
import { useRouter } from 'next/router';
const Profile = () =>{
    const router = useRouter()
    const viewHandler = () =>{
        router.push({
			pathname: "/profile"
		})
    }
    return(
        <Dropdown >
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          <BsPersonFill/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={viewHandler}>View Profile</Dropdown.Item>
          <Dropdown.Item href="/#">Orders</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="/#">Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
};

export default Profile