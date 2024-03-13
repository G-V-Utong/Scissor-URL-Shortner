
import "./qrcodemodal.css";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";

const QRCodeModal = () => {
    const [modal, setModal] = useState(true);
    const qrCodeData  = useSelector((state: any) => state.qrCode.qrCodeData);
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
      {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h1>Your custom QR Code</h1>
              <button className="close-modal" onClick={toggleModal}>
              <IoMdClose />
              </button>
              <p>Here's your personalized QR code for your shortened link. Now your clients can enjoy the convenience of scanning and browsing on the go! <span>Click the QR code image to download.</span></p>
              {qrCodeData && qrCodeData.qr_code && (
              <a href={`${qrCodeData.qr_code}`} download><img src={`${qrCodeData.qr_code}`} alt="QR Code" /></a>
              )}
            </div>
          </div>
          )}
      </>
    );
}

export default QRCodeModal;
