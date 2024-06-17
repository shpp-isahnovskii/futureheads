import { useState } from 'react';
import OurEnterprise from './OurEnterprise';
import VideoOpener from './VideoOpener';

const VideoBanner = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  return (
    <>
      <section className="flex items-center relative w-full h-screen md:mb-32">
        <VideoOpener
          onVideoEnded={() => setIsVideoEnded(true)}
          className={isVideoEnded && 'opacity-0'}
        />
        <OurEnterprise isVideoEnded={isVideoEnded} />
      </section>
    </>
  );
};

export default VideoBanner;
