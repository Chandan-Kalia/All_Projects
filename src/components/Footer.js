export default function Footer() {
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">RecipesHub.com</p>
                <div className="layout-grid">
                    <div>
                    <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
                        <img className="sociallinks1" src="https://cdn.prod.website-files.com/63bb7fe09d70bb7dc8e86719/63bcc7e5701f97d03e9854fb_Download_on_the_App_Store_Badge_blk.png" alt="Download on the App Store" />
                    </a>
                    <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
                        <img className="sociallinks2" src="https://cdn.prod.website-files.com/63bb7fe09d70bb7dc8e86719/63bcd12029ab7f261facbb0c_google-play-badge.png" alt="Get it on Google Play" />
                    </a>
                    </div>
                    <div>
                    <a href="https://web.app.com" target="_blank" rel="noopener noreferrer">
                        <img className="sociallinks3" src="https://cdn.prod.website-files.com/63bb7fe09d70bb7dc8e86719/63bcd120935e9b651b9b87f0_Login%20to%20the%20web%20app%20badge.png" alt="Login to the web app" />
                    </a>
                    <a href="https://chromewebstore.google.com/" target="_blank" rel="noopener noreferrer">
                        <img className="sociallinks4" src="https://cdn.prod.website-files.com/63bb7fe09d70bb7dc8e86719/63c5f61046d7cf703a3c9218_Chrome-Web-Store-Logo.png" alt="Chrome Web Store" />
                    </a>
                    </div>
                </div>
                <p className="about" >RecipesHub is a place where you can please your soul and tummy with delicious food recipes of all cuisines. And our service is absolutely free.</p>
                <p className="about">&copy; 2024 RecipesHub | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>Recipeshub@gmail.com</p>
                <p>+91 98765 - 43210</p>
                <p>Bla-bla Street PUNE</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <div className="social">
                    <a href="https://www.facebook.com/">
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="social-logo" />
                        Facebook
                    </a></div>
                    <div className="social1">
                    <a href="https://twitter.com/i/flow/signup?lang=en">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="social-logo" />
                        Twitter
                    </a></div>
                    <div className="social2">
                    <a href="https://www.instagram.com/">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="social-logo" />
                        Instagram
                </a></div>
            </div>
        </div>
    )
}