import React from 'react'
import * as T from './types';
import * as S from './styles'


export const Typography: React.FC<T.TypographyProps> = ({ variant = 'paragraph', children, ...props }) => {
  return (
    <S.Text variant={variant} {...props}>{children}</S.Text>
  )
}
