import { Link } from 'react-router-dom';
import JustTalkLogo from '../assets/images/just-talk-logo.png';

export default function Footer() {
  return (
    <footer className="bg-dark-text text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Get in Touch */}
          <div className="col-span-1 lg:col-span-2">
            <img src={JustTalkLogo} alt="JustTalk Logo" className="h-12 w-auto mb-4" />
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <p>+91 738 9863 549</p>
            <p>info@justtawk.com</p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul>
              <li><Link to="/solutions#omnichannel" className="hover:text-primary">Omni Channel</Link></li>
              <li><Link to="/solutions#support" className="hover:text-primary">Support</Link></li>
            </ul>
          </div>

          {/* Feature */}
          <div>
            <h3 className="font-bold text-lg mb-4">Feature</h3>
            <ul>
              <li><Link to="/features#features" className="hover:text-primary">Affordable Price</Link></li>
              <li><Link to="/features#features" className="hover:text-primary">Zero commitments</Link></li>
              <li><Link to="/features#features" className="hover:text-primary">Communication Handling</Link></li>
              <li><Link to="/features#features" className="hover:text-primary">Easy monitoring</Link></li>
              <li><Link to="/features#features" className="hover:text-primary">Communicates 24*7</Link></li>
            </ul>
          </div>

          {/* Resources & About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            </ul>
            <h3 className="font-bold text-lg mt-8 mb-4">About JustTawk</h3>
            <ul>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary">Privacy & Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Copyright © Justtawk 2024 - 2025. All Rights Reserved.</p>
          {/* Add social media icons here */}
        </div>
      </div>
    </footer>
  );
}
