import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import './prism-one-dark.css'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;
  flex-shrink: 0;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 500;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 4px solid #000000;
    background-color: #f8f9fa;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'],
  code[class*='language-'] * {
    tab-size: 2;
    font-family: 'JetBrains Mono', monospace;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
  .gatsby-highlight-code-line {
    background-color: rgba(125, 211, 252, 0.15);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid rgb(56 189 248);
  }
  /**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */
  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  /**
 * Remove the default PrismJS theme background-color, border-radius, margin,
 * padding and overflow.
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .gatsby-highlight.
 * 3. Adjust the position of the line numbers
 */
  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }
  /**
 * If you already use line highlighting
 */

  /* Adjust the position of the line numbers */
  .gatsby-highlight pre[class*='language-'].line-numbers {
    padding-left: 2.8em;
  }

  /**
 * If you only want to use line numbering
 */

  .gatsby-highlight {
    background: hsl(220, 13%, 18%);
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*='language-'].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
  .line-numbers {
    .line-numbers-rows {
      border-right: none;
    }
  }
  /**
We prefix all selectors with pre:not(.language-diff), to ensure we leave 
git diffs intact. 
But all other diffs (e.g., JavaScript, C++, etc...), will have 
the changes applied.
*/

  /* Hide the diff tokens "column" of diff files code blocks (the first 
   character of each line). */
  pre:not(.language-diff) .token.prefix.inserted,
  pre:not(.language-diff) .token.prefix.deleted,
  pre:not(.language-diff) .token.prefix.unchanged {
    user-select: none;
    color: transparent;
  }

  /* On each line that would have had a "+" or "-" token, add that same token
 as an absolutely positioned character to the left of the code block. */
  pre:not(.language-diff) .token.prefix.inserted::after {
    content: '+';
    position: absolute;
    margin-left: -1rem;
    user-select: none;
    color: green;
  }

  pre:not(.language-diff) .token.prefix.deleted::after {
    content: '-';
    position: absolute;
    margin-left: -1rem;
    user-select: none;
    color: red;
  }

  /** Adjust the margins and paddings of diff codeblocks to ensure the
 highlighted row is not blocked by the artificial token created above. */
  pre:not(.language-diff).diff-highlight > code .token.inserted:not(.prefix),
  pre:not(.language-diff) > code.diff-highlight .token.inserted:not(.prefix) {
    margin-right: -1rem;
    margin-left: -1rem;
    padding-right: 1em;
    padding-left: 1rem;
  }

  pre:not(.language-diff).diff-highlight > code .token.deleted:not(.prefix),
  pre:not(.language-diff) > code.diff-highlight .token.deleted:not(.prefix) {
    margin-right: -1rem;
    margin-left: -1rem;
    padding-right: 1em;
    padding-left: 1rem;
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
