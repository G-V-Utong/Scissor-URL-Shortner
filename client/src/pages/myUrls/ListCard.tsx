import { useDispatch } from "react-redux";
import "./listcard.scss";
import { Link } from "react-router-dom";
import { deleteItem, redirectUrl } from "../../redux/urlSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { BiTrash } from "react-icons/bi";

const ListCard = (items: any) => {
    const { item } = items;
    const dispatch: Dispatch<any> = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(item._id));
      };

    const handleRedirect = () => {
        dispatch(redirectUrl(item.shortId))
    }

  return (
    <div className="menuCard">
      <ul
        className= "menu">
        <li>
          {/* Displaying the task description */}
          <Link to={item.destination}><p>{item.destination}</p></Link>
        </li>
        <li>
          {/* Displaying the task status */}
          <button onClick={handleRedirect}>{item.shortId}</button>
        </li>
        <li>
          {/* Buttons for moving the task left, right, and deleting */}
          <p>{item.Clicks}</p>
        </li>
        <li>
        <button onClick={handleDelete} className="trash">
            <BiTrash />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ListCard
