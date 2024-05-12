import { useState } from 'react';
import OurEnterprise from './OurEnterprise';
import VideoOpener from './VideoOpener';

const VideoBanner = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  return (
    <>
      <section className="relative w-full h-screen mb-32">
        <VideoOpener onVideoEnded={() => setIsVideoEnded(true)} className={ isVideoEnded && 'opacity-0'} />
        <OurEnterprise isVideoEnded={isVideoEnded} />
      </section>
    </>
  );
};

export default VideoBanner;
