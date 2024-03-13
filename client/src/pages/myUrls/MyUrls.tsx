import './myurls.scss';
import { useEffect } from "react";
import { Dispatch } from 'redux';
import ListCard from './ListCard';
import { getAllUrls } from '../../redux/urlSlice';
import { useDispatch, useSelector } from "react-redux";
import URLShortnerForm from '../../components/URLShortnerForm';
import QRCodeModal from '../../components/modals/QRCodeModal';


const MyUrls = () => {
  const urlState = useSelector((state: any)=> state.shortUrls);

  const { AllUrls } = urlState;
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getAllUrls());
  }, [dispatch]);

  return (
    <>
    {/* <QRCodeModal/> */}
    <div className='myUrlContainer'>
      <div className="myUrlContainer__wrapper">
        <h2>Create a new shortened URL</h2>
        <URLShortnerForm windowReload={true}/>
      <ul className="list-header">
        <li>
          <h5>Full URL</h5>
        </li>
        <li>
          <h5>Your shortened URL</h5>
        </li>
        <li>
          <h5>Clicks</h5>
        </li>
        <li>
          <h5>Generate QR Code </h5>
        </li>
        <li>
          <h5>Delete</h5>
        </li>
      </ul>
      {Object.values(AllUrls)
        .slice(0)
        .reverse()
        .map((item: any) => {
          return <ListCard key={item._id} item={item} />;
        })}
      </div>
    </div>
    </>
  )
    
    
}

export default MyUrls
