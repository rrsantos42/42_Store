import Header from "../../comp/Header/header";
import ProfilePage from "../../comp/ProfilePage/ProfilePage";
import styles from '../../styles/Backgroud.module.scss'

const Profile = () =>{
    return(<div className={styles.mainbody} >
        <Header/>
        <ProfilePage/>
    </div>
    );
};

export default Profile