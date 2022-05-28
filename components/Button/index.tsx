import {IButtonProps} from "./types";
import cn from 'classnames'
import s from './Button.module.css'

export default function Button({buttonView, children}: IButtonProps): JSX.Element {
    return (
        <button className={cn(s.button, {
            [s.ghost]: buttonView === 'ghost',
            [s.primary]: buttonView === 'primary'
        })}>
            {children}
        </button>
    )
}