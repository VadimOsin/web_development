import React, { FC, ReactElement } from 'react'
import S from './IconWrapper.module.css'

export type TIconWrapperProps = {
  children: ReactElement;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
} & Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

export const IconWrapper: FC<TIconWrapperProps> = ({
                                                     children,
                                                     onClick,
                                                     ...props
                                                   }) => {
  const svgBaseProps = {
    fill: 'currentColor',
    'aria-hidden': 'true',
    'user-select': 'none',
    focusable: 'false'
  }

  return (
    <span
      className={S.wrapperIcon}
      role="img"
      onClick={onClick}
    >
      {React.cloneElement(children, { ...svgBaseProps, ...props })}
    </span>
  )
}
