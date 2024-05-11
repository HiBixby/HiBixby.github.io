import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo'

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}
type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.75);

  @media (max-width: 768px) {
    height: 300px;
  }
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  tags,
  thumbnail,
  timeToRead,
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo
        title={title}
        date={date}
        tags={tags}
        timeToRead={timeToRead}
      />
    </PostHeadWrapper>
  )
}

export default PostHead
