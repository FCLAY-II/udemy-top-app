import {IButtonProps} from "./Button.props";
import cn from 'classnames'
import s from './Button.module.css'

export default function Button({appearance, children}: IButtonProps): JSX.Element {
    return (
        <button className={cn(s.button, {
            [s.ghost]: appearance === 'ghost',
            [s.primary]: appearance === 'primary'
        })}>
            {children}
        </button>
    )
}