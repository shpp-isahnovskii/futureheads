import MainBanner from '@/assets/media/main-banner.mp4';
import MainBannerMobile from '@/assets/media/main-banner-mobile.mp4';
import useMediaQuery from '@/utils/useMediaQuery';

const VideoOpener = (props) => {
  const videoEndedHandler = () => {
    props.onVideoEnded();
  };
  const { media } = useMediaQuery();

  return (
    <>
      <video
        className={`md:h-full w-full object-cover ${props.className}`}
        controls={false}
        muted
        autoPlay
        loop={media === 'mobile'}
        onEnded={videoEndedHandler}
      >
        <source src={MainBanner} type="video/mp4" media="(min-width: 768px)" />
        <source
          src={MainBannerMobile}
          type="video/mp4"
          media="(min-width: 320px)"
        />
      </video>
    </>
  );
};

export default VideoOpener;
