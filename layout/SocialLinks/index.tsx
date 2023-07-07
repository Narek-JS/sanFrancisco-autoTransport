import { Fragment } from 'react';
import { FormQuote } from '@/sharedComponents/FormQuote';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import { BingIcon } from "@/public/assets/svgs/BingIcon";
import { FbIcon } from "@/public/assets/svgs/FbIcon";
import { GoogleIcon } from "@/public/assets/svgs/GoogleIcon";
import { PinterestIcon } from "@/public/assets/svgs/PinterestIcon";
import { TwitterIcon } from "@/public/assets/svgs/TwitterIcon";
import { YelpIcon } from "@/public/assets/svgs/YelpIcon";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeQuoteFormDesktop, openQuoteFormDesktop, selectQuoteFormStatusDesktop } from '@/store/quoteForm';
import { selectMenus } from '@/store/manu';
import useWindowSize from '@/hooks/useWindowSize';
import Portal from '@/sharedComponents/Portal';
import classNames from 'classnames';
import classes from './index.module.css';

export const socialIcons = {
    'Facebook': FbIcon,
    'Twitter': TwitterIcon,
    'Pinterest': PinterestIcon,
    'Google': GoogleIcon,
    'Bing': BingIcon,
    'Yelp': YelpIcon
};

const SocialLinks = () => {
    const { width } = useWindowSize();
    const { data, } = useAppSelector(selectMenus);
    const dispatch = useAppDispatch();
    const isOpenQuoteFormDesktop = useAppSelector(selectQuoteFormStatusDesktop)
    const openFormPopup = () => dispatch(openQuoteFormDesktop());
    const closeFormPopup = () => dispatch(closeQuoteFormDesktop());

    if(Number(width) <= 768) return null;

    return (
        <Fragment>
            <div className={classNames(classes.socialLinks, 'socialLinks')}>
                { data?.social.map((social, index) => {
                    const IconComponent = socialIcons[social.title];
                    return IconComponent && <IconComponent key={index} />
                })}
                <div className={classes.icon} onClick={openFormPopup}>
                    <p> <span>Get Quote</span> </p>
                    <i>
                        <ArrowIcon rotate={isOpenQuoteFormDesktop ? 180 : 0} />
                    </i>
                </div>
            </div>
            {isOpenQuoteFormDesktop && (
                <Portal onClose={closeFormPopup}>
                    <FormQuote />
                </Portal>
            )}
        </Fragment>
    );
};

export { SocialLinks };