import { Link, useNavigate } from "react-router-dom"
import "../../style/style.css"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { logoutSuccess } from "../../redux/authSlice";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.auth.currentUser !== null);

    const navigateSignIn = () => {
        navigate('/signin')
    }
    const navigateSignUp = () => {
        navigate('/signup')
    }

    const handleLogout = () => {
        dispatch(logoutSuccess());
        navigate('/')
        // Add any additional logic, such as redirecting to a specific page
    };

    return (
        <div>
            <header>
                <div className="header-main">
                    <Link to={"/"}><img id="logo" src="/images/Logo.svg" alt="Logo" /></Link>
                    <div className="header-options">
                        <ul className="header-options-list">
                            {isLoggedIn? (<>
                                <li><Link to='/myurls'>My URLs</Link> </li> 
                            <li>Features <img src="/images/chevron-down.svg" alt="chevron-down" /></li>
                            <li>Pricing</li>
                            <li>Analytics</li>
                            <li>FAQs</li>
                            </>) : (<> 
                            <li>Features <img src="/images/chevron-down.svg" alt="chevron-down" /></li>
                            <li>Pricing</li>
                            <li>Analytics</li>
                            <li>FAQs</li>
                            </>)}
                           
                        </ul>
                    </div>

                    <div className="btn-container">
                        {isLoggedIn ? (
                            <button className="btn-none" onClick={handleLogout}>Log out</button>
                        ) : (
                            <>
                                <button className="btn-none" onClick={navigateSignIn}>Log in</button>
                                <button className="btn-full" onClick={navigateSignUp}>Try for free</button>
                            </>
                        )}
                        {/* <button className="btn-none" onClick={navigateSignIn}>Log in</button>
                        <button className="btn-full"onClick={navigateSignUp}>Try for free</button> */}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
