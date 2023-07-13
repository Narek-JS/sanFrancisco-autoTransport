import { useRouter } from "next/router";
import { Conditional } from "../Conditional";
import Image from "next/image";
import Link from "next/link";
import classes from './index.module.css';

export const Logo: React.FC = () => {
    const { pathname } = useRouter();

    const image = <Image
        src={"/assets/images/logo.png"}
        alt="logo"
        className={classes.logo}
        width={190}
        height={100}
        priority
    />;

    return (
        <Conditional
            condition={pathname !== '/'}
            fallback={() => image}
        >
            <Link href='/'> {image} </Link>
        </Conditional>
    );
};