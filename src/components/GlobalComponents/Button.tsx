import React, { ReactChild } from 'react'
import { ButtonBack, ButtonFront } from '../../styles/globalStyles/globalHTML'

interface ButtonProps {
    alt?: any;
    form?: any;
    disabled?: any;
    children?: ReactChild;
    onClick?: any;
}

export default function Button(props: ButtonProps): JSX.Element {
    return (
        <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
            <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
        </ButtonBack>
    )
}

