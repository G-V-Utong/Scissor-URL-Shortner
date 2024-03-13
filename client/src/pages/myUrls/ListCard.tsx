import { useDispatch } from "react-redux";
import "./listcard.scss";
import { Link, useNavigate } from "react-router-dom";
import { deleteItem, redirectUrl } from "../../redux/urlSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { BiTrash } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { BsQrCode } from "react-icons/bs";
import { createQrCode } from "../../redux/qrCodeSlice";
import QRCodeModal from "../../components/modals/QRCodeModal";

const ListCard = (items: any) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }
  const navigate = useNavigate();
  const { item } = items;
  const dispatch: Dispatch<any> = useDispatch();

  const handleDelete = () => {
      dispatch(deleteItem(item._id));
    };

  const handleRedirect = () => {
      dispatch(redirectUrl(item.shortId))
  }

  const handleQrCode = () => {
    dispatch(createQrCode(item.shortId));
    toggleModal();
    // console.log('QR Code generated')
  }

  const userId = useSelector((state: any) => state.auth.currentUser?._id);

  useEffect(() => {
    if (item.urlData) {
      navigate(item.urlData.url);
  }
  }, [item.urlData, navigate])

  if (userId !== item.createdBy) {
    return null; // If userId does not match item.createdBy, do not render
  }

  return (
    <>
    {modal && <QRCodeModal/>}
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
        <button className="btn-none-borders" onClick={handleQrCode}>
        <BsQrCode/> Generate
          </button>
        </li>
        <li>
        <button onClick={handleDelete} className="trash">
            <BiTrash /> 
          </button>
        </li>
      </ul>
    </div>
    </>
  )
}

export default ListCard
