import "../../style/style.css"

const Header = () => {
    return (
        <div>
            <header>
                <div className="header-main">
                    <img id="logo" src="/images/Logo.svg" alt="Logo" />
                    <div className="header-options">
                        <ul className="header-options-list">
                            <li>My URLs</li>
                            <li>Features <img src="/images/chevron-down.svg" alt="chevron-down" /></li>
                            <li>Pricing</li>
                            <li>Analytics</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className="btn-container">
                        <button className="btn-none">Log in</button>
                        <button className="btn-full">Try for free</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
