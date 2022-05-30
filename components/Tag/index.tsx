import {ITagProps} from "./types";
import cn from "classnames";
import s from './Tag.module.css'

export default function Tag({
                                children,
                                className,
                                href,
                                size = 'small',
                                color = 'ghost',
                                ...props
                            }: ITagProps): JSX.Element {
    return (
        <div className={cn(s.tag, {
            [s.small]: size == 'small',
            [s.medium]: size == 'medium',
            [s.ghost]: color == 'ghost',
            [s.grey]: color == 'grey',
            [s.red]: color == 'red',
            [s.green]: color == 'green',
            [s.primary]: color == 'primary',

        })} {...props}>

            {href
                ? <a href={href}>{children}</a>
                : <>{children}</>}

        </div>
    )
}