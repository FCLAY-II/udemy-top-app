import cn from 'classnames'
import s from './Button.module.css'
import {IButtonProps} from "./types";
import ArrowIcon from './arrow.svg'

export default function Button({buttonView, arrow = 'none', children, className, ...props}: IButtonProps): JSX.Element {
    return (
        <button
            className={cn(s.button, className, {
                [s.primary]: buttonView == 'primary',
                [s.ghost]: buttonView == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(s.arrow, {
                [s.down]: arrow == 'down'
            })}>
				<ArrowIcon/>
			</span>}
        </button>
    );
};