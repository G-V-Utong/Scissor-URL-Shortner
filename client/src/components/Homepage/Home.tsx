import "../../style/gradients.css";
import "../../style/style.css"
import "../../App.css"
import URLShortnerForm from "../URLShortnerForm";

const Home = () => {
  return (
    <div>
        <div className="gradient-container">
            <div className="gradient gradient-lg gradient-orange"></div>
            <div className="gradient gradient-md gradient-green"></div>
            <div className="gradient gradient-md gradient-red"></div>
        </div>

        <div className="hero">
            <div className="hero-text">
                <h1 className="Gilroy-Medium">
                    Optimize Your Online Experience with Our <br/>Advanced <span>URL Shortening</span> Solution
                </h1>
                <img src="/images/Vector 3.svg" alt="URl emphasis"/>
                <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>    
            </div>

            <div className="btn-container-2">
                <button className="btn-full">Sign up</button>
                <button className="btn-none">Learn more</button>
            </div>

            <div className="frame">
                <div className="frame-vector">
                    <img src="/images/Vector 2.svg" alt="vector"/>
                </div>
                <div className="frame-vector-div">
                <div className="frame-vector-p">
                        <p>
                            Seamlessly transform your long URLs into concise and shareable links with just few clicks. <span>Try it.</span>
                        </p>
                    </div>
                    <URLShortnerForm />
                    <img src="/images/Frame 1000001716.svg" alt="frame decoration"/>
                </div>
            </div>
            <div className="decor-base">
                <img src="/images/Group 3.png" alt="Decor-base"/>
            </div>
        </div>

        <div className="banner-container">
            <h1>
                One Stop.<br/> Four <span>Possibilities</span>. 
            </h1>
            <div>
                <h3>
                   3M 
                </h3>
                <p>
                    Active users
                </p>
            </div>
            <div>
                <h3>
                   60M 
                </h3>
                <p>
                    Links & QR codes created
                </p>
            </div>
            <div>
                <h3>
                   1B 
                </h3>
                <p>
                    Clicked & Scanned connections
                </p>
            </div>
            <div>
                <h3>
                   300K 
                </h3>
                <p>
                    App Integrations
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-reason">
                <div className="product-reason-header">
                    <img src="/images/Line 70.svg" alt="Line"/>
                    <h1>
                        Why choose <span>Scissor</span> 
                    </h1>
                </div>
                <p>
                    Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. 
                </p>
            </div>
            <div className="product-reasons-options">
                <div className="product-reasons-option">
                    <img src="/images/Group 6.svg" alt=""/>
                    <h3>
                        URL Shortening
                    </h3>
                    <p>
                        Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.
                    </p>
                </div>
                <div className="product-reasons-option">
                    <img src="/images/Group 6 (2).svg" alt=""/>
                    <h3>
                        Custom URLs
                    </h3>
                    <p>
                        With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses. 
                    </p>
                </div>
                <div className="product-reasons-option">
                    <img src="/images/Group 6 (1).svg" alt=""/>
                    <h3>
                        QR Codes
                    </h3>
                    <p>
                        Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.
                    </p>
                </div>
                <div className="product-reasons-option">
                    <img src="/images/Group 6 (4).svg" alt=""/>
                    <h3>
                        Data Analytics
                    </h3>
                    <p>
                        Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.
                    </p>
                </div>

            </div>
        </div>

        <div className="pricing-container">
            <div className="pricing-container-box">
                <div className="pricing-container-header">
                    <img src="/images/Line 70.svg" alt="Line"/>
                    <h1>
                        A <span>price perfect</span> for your needs.  
                    </h1>
                </div>
                <p>
                    From catering for your personal, business, event, socials needs, you can rest assured we have you in mind in our pricing.
                </p>
            </div>
            <div className="price-cards">
                <div className="price-card-1">
                    <p>
                        Basic
                    </p>
                    <h3>
                        Free
                    </h3>
                    <p>
                        Free plan for all users
                    </p>
                    <ul>
                        <li>Unlimited URL Shortening</li>
                        <li>Basic Link Analytics</li>
                        <li>Customizable Short Links</li>
                        <li>Standard Support</li>
                        <li>Ad-supported</li>
                    </ul>
                </div>
                <div className="price-card-2">
                    <p>
                        Professional
                    </p>
                    <h3>
                        $15/month
                    </h3>
                    <p>
                        Ideal for business creators
                    </p>
                    <ul>
                        <li>Enhanced Link Analytics</li>
                        <li>Custom Branded Domains</li>
                        <li>Advanced Link Customization</li>
                        <li>Priority Support</li>
                        <li>Ad-free Experience</li>
                    </ul>
                </div>
                <div className="price-card-3">
                    <p>
                        Teams
                    </p>
                    <h3>
                        $25/month
                    </h3>
                    <p>
                        Share with up to 10 users
                    </p>
                    <ul>
                        <li>Team Collaboration</li>
                        <li>User Roles and Permissions</li>
                        <li>Enhanced Security</li>
                        <li>API Access</li>
                        <li>Dedicated Account Manager</li>
                    </ul>

                </div>
            </div>
            
            <div className="btn-container-2">
                <button className="btn-none-border">Learn more</button>
                <button className="btn-full">Sign up</button>
            </div>
        </div>

        <div className="form-container">
            <div className="form">
                <div className="form-input">
                    <input type="text" className="input" placeholder="Paste URL here..."/>
                    <select name="domain" id="domain">
                        <option value="" disabled selected>Choose Domain</option>
                        <option value="TinyURL">TinyURL</option>
                        <option value="Bitly">Bitly</option>
                        <option value="Rebrandly">Rebrandly</option>
                        <option value="Short.io">Short.io</option>
                    </select>
                    <input type="text" className="input-2" placeholder="Type Alias here"/>
                </div>
                <div className="form-submit">
                    <button className="btn-full-2">
                        Trim URL <img src="/images/magic wand.svg" alt="Magic wand" width="26px"/>
                    </button>
                    <p>
                        By clicking TrimURL, I agree to the <strong>Terms of Service, Privacy Policy</strong> and Use of Cookies.
                    </p>

                </div>
            </div>
        </div>

        <div className="FAQs">
            <div className="pricing-container-header">
                <img src="/images/Line 70.svg" alt="Line"/>
                <h1>
                    FAQs 
                </h1>
            </div>

            <div className="faq-options">
                <div id="faq">
                    <ul>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h2>How does URL shortening work?</h2>
                        <p>URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                        </p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h2>Is it necessary to create an account to use the URL shortening service?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi, quia provident facere recusandae itaque assumenda fuga veniam dicta earum dolorem architecto facilis nisi pariatur.</p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h2>Are the shortened links permanent? Will they expire?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h2>Are there any limitations on the number of URLs I can shorten?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h2>Can I customize the shortened URLs to reflect my brand or content?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h2>Can I track the performance of my shortened URLs?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h2>How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h2>What is a QR code and what can it do?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h2>Is there an API available for integrating the URL shortening service into my own applications or websites?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
                      </li>
                      
                    </ul>
                  </div>
            </div> 
        </div>

        <div className="rev">
            <h1>
                Revolutionizing Link Optimization
            </h1>
            <button className="btn-full">Get Started</button>
        </div>
    </div>
  )
}

export default Home
