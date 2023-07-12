import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion';
import { motionOption } from '@/constants/animationOptions';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const HTMLKeys: Array<any> = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "slot", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "template", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview"]

type TypeReactHTMLKey = "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "center" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview";

interface IProps {
    children: React.ReactNode;
    from?: 'right' | 'left' | 'bottom' | 'top'  | 'skew';
};

export const motionCustom: Record<TypeReactHTMLKey, ForwardRefComponent<HTMLAnchorElement, HTMLMotionProps<any> & IProps>> = HTMLKeys.reduce((
    acc: Record<TypeReactHTMLKey, any>,
    key: TypeReactHTMLKey
) => {
    acc[key] = '';
    return acc;
}, {});

for (let key in motionCustom) {
    Object.defineProperty(motionCustom, key, {
      get() {
        const elementKey: TypeReactHTMLKey = key as TypeReactHTMLKey;

        return ({ from, children, ...props}: IProps) => {
            const AnimatedElement: ForwardRefComponent<HTMLAnchorElement, HTMLMotionProps<typeof elementKey>> = motion[elementKey];
            const [ref, inView] = useInView({
                triggerOnce: true,
            });
            const [modifyedProps, setModifyedProps] = useState(props);

            useEffect(() => {
                if(inView && modifyedProps instanceof Object) {
                    delete (modifyedProps as any).animate;
                    delete (modifyedProps as any).whileInView;
                    setModifyedProps({...modifyedProps, });
                };
            }, [inView]);

            return (
                <AnimatedElement
                    {...(from && inView !== true && motionOption[from])}
                    {...modifyedProps}
                    ref={ref}
                > 
                    { children }
                </AnimatedElement>
            );

        };
      },
    });
};