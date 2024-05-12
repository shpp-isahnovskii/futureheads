import MainBanner from '@/assets/media/main-banner.mp4';

const VideoOpener = (props) => {
  const videoEndedHandler = () => {
    props.onVideoEnded();
  };
  return (
    <>
      <video
        src={MainBanner}
        className={`h-full w-full object-cover ${props.className}`}
        controls={false}
        muted
        autoPlay
        onEnded={videoEndedHandler}
      />
    </>
  );
};

export default VideoOpener;
