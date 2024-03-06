import "../../style/style.css";
import "../../style/gradients.css"
const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-subcontainer">
            <div className="footer-logo-div">
                <img src="/images/Logob&w.svg" alt="Logo"/>
                <div className="socials-logo">
                    <img src="/images/i.fi-social-twitter.svg" alt="Twitter logo"/>
                    <img src="/images/svg.feather.svg" alt="instagram logo"/>
                    <img src="/images/i.fi-social-linkedin.svg" alt="LinkedIn logo"/>
                    <img src="/images/i.fi-social-facebook.svg" alt="facebook logo"/> 
                </div>
            </div>
            <div className="catalog-container">
                <div className="catalog">
                    <p className="catalog-header"><strong>Why Scissor ?</strong></p>
                    <p>Scissor 101</p>
                    <p>Integrations & API</p>
                    <p>Pricing</p>
                </div>

                <div className="catalog">
                    <p className="catalog-header"><strong>Solutions</strong></p>
                    <p>Social Media</p>
                    <p>Digital Marketing</p>
                    <p>Customer Service</p>
                    <p>For Developers</p>
                </div>

                <div className="catalog">
                    <p className="catalog-header"><strong>Products</strong></p>
                    <p>Link Management</p>
                    <p>QR Codes</p>
                    <p>Link-in-bio</p>
                </div>

                <div className="catalog">
                    <p className="catalog-header"><strong>Company</strong></p>
                    <p>About Scissor</p>
                    <p>Careers</p>
                    <p>Partners</p>
                    <p>Press</p>
                    <p>Contact</p>
                    <p>Reviews</p>
                </div>

                <div className="catalog">
                    <p className="catalog-header"><strong>Resources</strong></p>
                    <p>Blog</p>
                    <p>Resource Library</p>
                    <p>Developers</p>
                    <p>App Connectors</p>
                    <p>Support</p>
                    <p>Trust Center</p>
                    <p>Browser Extension</p>
                    <p>Mobile App</p>
                </div>

                <div className="catalog">
                    <p className="catalog-header"><strong>Features</strong></p>
                    <p>Branded Links</p>
                    <p>Mobile Links</p>
                    <p>Campaign</p>
                    <p>Management & Analytics</p>
                    <p>QW Code generation</p>
                </div>

                <div className="catalog">
                    <p className="catalog-header"><strong>Legal</strong></p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Terms of Service</p>
                    <p>Acceptable Use Policy</p>
                    <p>Code of Conduct</p>
                </div>
            </div>
        </div>
        <div className="terms-of-service">
            <p>Term of Service</p>
            <p>Security</p>
            <p>ⓒ Scissor 2024</p>
        </div>
    </div>
  )
}

export default Footer
