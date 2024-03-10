import { useDispatch } from "react-redux";
import "./listcard.scss";
import { Link, useNavigate } from "react-router-dom";
import { deleteItem, redirectUrl } from "../../redux/urlSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";

const ListCard = (items: any) => {
    const navigate = useNavigate();
    const { item } = items;
    const dispatch: Dispatch<any> = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(item._id));
      };

    const handleRedirect = () => {
        dispatch(redirectUrl(item.shortId))
    }

    useEffect(() => {
      if (item.urlData) {
        navigate(item.urlData.url);
    }
    }, [item.urlData, navigate])

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
          <Link to={item.destination}><p onClick={handleRedirect}>{item.shortId}</p></Link>
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
