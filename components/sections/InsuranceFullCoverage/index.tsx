import { Container } from '@/components/Container';
import { WrapperContentNode } from '@/components/WrapperContentNode';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import { ImageRounded } from '@/components/ImageRounded';
import classes from './index.module.css';
import Link from 'next/link';

const InsuranceFullCoverage: React.FC = () => {

    return (
        <section className={classes.insuranceFullCoverageSection}>
            <Container>
                <div className={classes.insuranceFullCoverageContent}>
                    <WrapperContentNode from='left'>
                        <h2>Full-coverage insurance</h2>
                        <h3>San Francisco Car Transport</h3>
                        <p>Ensuring the safety of your vehicle when you ship it sits atop your list of concerns. While all auto transport companies must have insurance, not all provide substantial coverage. But it will not be a hassle for you when you transport your vehicle with San Francisco Car Transport.</p>
                        <p>We are a licensed and bonded company that provides full insurance coverage for all our customers. Our company understands the importance of your vehicle, that’s why we pay attention to even the smallest detail during the process. As we built our reputation on our...</p>
                        <Link href={'/insurance'}>
                            <RowForMore />
                            Continue Reading
                        </Link>
                    </WrapperContentNode>
                    <ImageRounded
                        from='right'
                        alt='Insureance Image'
                        src='/assets/images/Inshurance.png'
                    />
                </div>
            </Container>
        </section>
    );
};

export { InsuranceFullCoverage };