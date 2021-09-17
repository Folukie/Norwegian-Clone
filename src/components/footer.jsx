

const Footer = () => {
    return (
        <footer>
            <hr/>

           <div className="footer-grid">
           <div className="logo">
                <img src="./logo.jpg" alt="" />
            </div>
            <div className="newsletter">
                <h3>Join our Newsletter</h3>
                <p>Sign up for the Norwegian Rain & T. Michael Tokyo Store newsletter to stay up to date and with the best deals.</p>
            </div>
            <div className="register">
                <input type="text" placeholder="email address"/>
            </div>

           </div>
           <div className ="copyright">
               <h5>&copy; 2021, Norwegian Rain & T-MICHAEL TOKYO STORE. All rights reserved</h5>
                <p>Legal Notice</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
           </div>
            
        </footer>
    )
}

export default Footer
