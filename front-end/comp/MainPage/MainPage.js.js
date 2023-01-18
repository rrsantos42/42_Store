import Header from "../Header/header";
import Items from "./Items/Items";

const MainPage = (props) => {

  return (
    <div>
      <Header/>
      <Items Products={props.Products}/>
    </div>
  );
};
export default MainPage;
