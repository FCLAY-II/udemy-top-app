import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;

    size?: 'small' | 'medium'
    color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary'
    href?: string;
}