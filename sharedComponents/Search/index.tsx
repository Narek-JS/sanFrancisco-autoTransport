import { SearchIcon } from '@/public/assets/svgs/SearchIcon';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { LoadingUI } from '@/sharedComponents/LoadingUI';
import { scrollIsArriveBottom } from '@/helper/search';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { CloseIcon } from '@/public/assets/svgs/CloseIcon';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetSearchDataMutation } from '@/store/search';
import classNames from 'classnames';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';
import classes from './index.module.css';

type FindMessage = {
    slug: string;
    title: string; 
};

const Search: React.FC = () => {
    // Local states
    const [ isOpen, setIsOpen ] = useState<Boolean>(false);
    const [ value, setValue ] = useState<string | null>(null);
    const [ page, setPage ] = useState<number>(1);
    const [ searchData, setSearchData ] = useState<Array<FindMessage>>([]);
    
    // Ref
    const dropDownRef = useRef<HTMLDivElement>(null);
    
    // Custom hooks
    const { width } = useWindowSize();
    const debouncedSearchTerm = useDebounce<string>(value || '');
    const scrollPosition = useScrollPosition(dropDownRef);

    // Mutation
    const [mutate, { data, isLoading }] = useGetSearchDataMutation();
    
    // useEffects 
    useEffect(() => {
        if(data !== undefined) {
            setSearchData([
                ...searchData,
                ...data?.pages || [],
                ...data?.postByCategory || [],
                ...data?.posts || []
            ]);
        };
    }, [data]);

    useEffect(() => {
        const isArriveBottom = scrollIsArriveBottom(scrollPosition, dropDownRef.current!);
        if(isArriveBottom && !isLoading && !data?.empty) setPage(page + 1);
    }, [scrollPosition]);

    useEffect(() => mutateCall(true), [debouncedSearchTerm]);
    useEffect(() => mutateCall(), [page]);

    // Memo
    const findedLinks = useMemo<Array<JSX.Element>>(() => (
        searchData.map(({ slug, title }, index) => (
            <Link href={'/' + slug} key={index} dangerouslySetInnerHTML={{ __html: title.replaceAll(value!, `<span>${value}</span>`) }} />
        ))
    ), [searchData]);

    const isMobile = useMemo(() => Number(width) <= 768, [width]);

    // Functions
    //    Arrows        
    const toogleIsOpen = () => !isMobile && setIsOpen(!isOpen);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value }} = event;
        setValue(value);
    };

    //   Declaration
    function mutateCall (intoIntitial: Boolean = false): void {
        if(intoIntitial) {
            setSearchData([]);
            setPage(1);
        };
        if(value !== null) {
            mutate({ page, text: debouncedSearchTerm });
        };
    };

    // JSX
    return (
        <div className={classes.wrapperSearch}>
            <div className={classNames(classes.input, {
                [classes.open]: isOpen,
                [classes.close]: !isOpen && !isMobile
            })}>
                <input
                    name={'search'}
                    placeholder='Search'
                    onChange={handleChange}
                    defaultValue={value || ''}
                />
                <div
                    ref={dropDownRef}
                    className={classNames(classes.dropDown, {
                        [classes.dropDownEmpty]: !Boolean(findedLinks.length),
                        [classes.dropDownClose]: value === null || debouncedSearchTerm === ''
                    })}
                >
                    {Boolean(findedLinks.length) ? findedLinks : <p>Not result</p>}
                </div>
            </div>
            <div className={classes.seaech} onClick={toogleIsOpen}>
                { isLoading ? <LoadingUI type='roundSmall' /> : (
                    isOpen ? <CloseIcon height={32} width={32} /> : <SearchIcon />
                )}
            </div>
        </div>
    );
};

export { Search };