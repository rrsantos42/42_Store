import Dropdown from 'react-bootstrap/Dropdown';
import { BsPersonFill } from "react-icons/bs"
import { useRouter } from 'next/router';
import ModalLogOut from './ModalLogOut/ModalLogOut';
import styles from './Profile.module.scss'
const Profile = () =>{


    const router = useRouter()
    const viewHandler = () =>{
        router.push({
			pathname: "/profile"
		})
    }

    return(
        <Dropdown className={styles.Dropdown} >
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          <BsPersonFill/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={viewHandler}>View Profile</Dropdown.Item>
          <Dropdown.Item href="/#">Orders</Dropdown.Item>
          <Dropdown.Divider/>
          <ModalLogOut/>
        </Dropdown.Menu>
      </Dropdown>
    );
};

export default Profile