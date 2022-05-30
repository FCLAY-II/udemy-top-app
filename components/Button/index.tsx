import {IButtonProps} from "./types";
import cn from 'classnames'
import s from './Button.module.css'

export default function Button({buttonView, className, arrow = 'none', ...restProps}: IButtonProps): JSX.Element {
    return (
        <button className={cn(s.button, className, {
            [s.ghost]: buttonView === 'ghost',
            [s.primary]: buttonView === 'primary'
        })}
                {...restProps}
                {...arrow !== 'none' && <span className={cn(s.arrow, {[s.down]: arrow === 'down'})}>dd</span>}
        >
        </button>
    )
}