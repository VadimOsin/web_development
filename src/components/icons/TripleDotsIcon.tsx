import { FC } from 'react'
import {IconWrapper} from './base/IconWrapper'
import { ReactComponent as Icon } from './svg/TripleDots.svg'
import {TIconProps} from "./type";

export const TripleDotsIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon />
  </IconWrapper>
)
