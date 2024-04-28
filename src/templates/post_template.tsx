import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostPageItemType } from 'types/PostItem.types' // 바로 아래에서 정의할 것입니다
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import TOC from 'components/Post/TOC'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
`

const ScrollToTopButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #eff1f5;
  color: #4c4f69;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  &:hover {
    cursor: pointer;
  }
`
function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      timeToRead,
      tableOfContents,
      frontmatter: {
        title,
        summary,
        date,
        tags,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]

  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <PostHead
        title={title}
        date={date}
        tags={tags}
        thumbnail={gatsbyImageData}
        timeToRead={timeToRead}
      />
      <ContentWrapper>
        <PostContent html={html} />
        <TOC tableOfContents={tableOfContents} />
      </ContentWrapper>
      <CommentWidget />
      <ScrollToTopButton onClick={ScrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </ScrollToTopButton>
    </Template>
  )
}
export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          timeToRead
          tableOfContents
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
