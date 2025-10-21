import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className="flex items-center gap-5 bg-base-200 p-3">
            <p className="text-base-100 bg-secondary px-3 py-2 ">Latest</p>
            <Marquee className='flex gap-5'
                // gradient={false} // removes the fading edges
                speed={60} // control speed (higher = faster)
                pauseOnHover={true} // pause when mouse hovers
                style={{
                    backgroundColor: "#f5f5f5",
                    color: "#d32f2f",
                    fontWeight: "bold",
                    padding: "10px",
                    // borderTop: "2px solid #d32f2f",
                    // borderBottom: "2px solid #d32f2f",
                }}
            >
                <p>🔥 Breaking News: Government announces new education policy — Stock market hits record high — Weather alert for tomorrow — Sports Update: National team wins the championship!</p>
                <p>🔥 Breaking News: Government announces new education policy — Stock market hits record high — Weather alert for tomorrow — Sports Update: National team wins the championship!</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;