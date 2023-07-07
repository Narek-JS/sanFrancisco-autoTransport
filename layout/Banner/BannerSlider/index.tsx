import { Carousel } from 'react-responsive-carousel';
import { inRange } from 'lodash';
import { useAppDispatch } from '@/store/hooks';
import { BannreIndexType, changeBannerIndex } from '@/store/banner';
import Image from 'next/image';
import classes from './index.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface IProps {
  bannerContentElm: HTMLDivElement | null; 
}

const BannerSlider: React.FC<IProps> = ({ bannerContentElm }) => {
  const dispatch = useAppDispatch();
  const style = { height: bannerContentElm?.offsetHeight === undefined ? '100vh' : (bannerContentElm?.offsetHeight + 185) + 'px' };

  const handleSlideChange = (index: number) => {
    if(inRange(index, 0, 4)) {
      dispatch(changeBannerIndex(String(index) as BannreIndexType))
    };
  };

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={10000}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={true}
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
