import {IParagraphProps} from "./types";
import cn from "classnames";
import s from './Paragraph.module.css'

export default function Paragraph({size = 'medium', className, children, ...props}: IParagraphProps): JSX.Element {
    return (
        <p className={cn(s.p, {
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
            [s.large]: size === 'large'
        })}
           {...props}
        >
            {children}
        </p>
    )
}