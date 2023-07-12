import { Carousel } from 'react-responsive-carousel';
import { inRange } from 'lodash';
import { useAppDispatch } from '@/store/hooks';
import { BannreIndexType, changeBannerIndex } from '@/store/banner';
import { useHydration } from '@/hooks/useHydration';
import Image from 'next/image';
import classes from './index.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerSlider: React.FC = () => {
  const dispatch = useAppDispatch();
  const hydration = useHydration();
  
  const handleSlideChange = (index: number) => {
    if(inRange(index, 0, 4)) {
      dispatch(changeBannerIndex(String(index) as BannreIndexType));
    };
  };
  
  const bannerContentElm: HTMLElement | null = hydration ? document.querySelector('.bannerContentElm') : null; 

  const style = { height: bannerContentElm?.offsetHeight === undefined ? '100vh' : (bannerContentElm?.offsetHeight + 185) + 'px' };

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={10000}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={false}
      onChange={handleSlideChange}
    >
      <div className={classes.imageWrapper} style={style}>
          <div className={classes.bg}/>
          <Image src="/assets/images/bannerImage1.png" alt="Image 1" fill={true} style={{ objectFit: 'cover' }} />
      </div>
      <div className={classes.imageWrapper} style={style}>
          <div className={classes.bg}/>
          <Image src="/assets/images/bannerImage2.png" alt="Image 1" fill={true} style={{ objectFit: 'cover' }} />
      </div>
      <div className={classes.imageWrapper} style={style}>
          <div className={classes.bg}/>
          <Image src="/assets/images/bannerImage1.png" alt="Image 1" fill={true} style={{ objectFit: 'cover' }} />
      </div>
      <div className={classes.imageWrapper} style={style}>
          <div className={classes.bg}/>
          <Image src="/assets/images/bannerImage4.png" alt="Image 1" fill={true} style={{ objectFit: 'cover' }} />
      </div>
    </Carousel>
  );
};

export { BannerSlider };
