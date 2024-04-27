import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
export type TagListProps = {
  selectedTag: string
  tagList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}

type TagItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & TagItemProps

const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TagItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<TagItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const TagList: FunctionComponent<TagListProps> = function ({
  selectedTag,
  tagList,
}) {
  return (
    <TagListWrapper>
      {Object.entries(tagList).map(([name, count]) => (
        <TagItem
          to={`/?category=${name}`}
          active={name === selectedTag}
          key={name}
        >
          #{name}({count})
        </TagItem>
      ))}
    </TagListWrapper>
  )
}

export default TagList
