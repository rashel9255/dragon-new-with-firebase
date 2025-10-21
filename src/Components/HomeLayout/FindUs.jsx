import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className="font-bold mb-3">Find Us On</h2>
            <div>
                <div className="join join-vertical w-full space-y-3">
                    <button className="btn bg-base-100 join-item justify-start"> <span><FaFacebook></FaFacebook></span> Facebook</button>
                    <button className="btn bg-base-100 join-item justify-start"> <span><FaTwitter></FaTwitter></span> Twitter</button>
                    <button className="btn bg-base-100 join-item justify-start"> <span><FaInstagram></FaInstagram></span>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;