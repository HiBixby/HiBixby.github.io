import styled from '@emotion/styled'

const TableOfContents = styled.div`
  position: absolute;
  height: 100%;
  padding-top: 100px;
  left: calc((100% - 768px) / 2 + 768px);
  margin-left: 3rem;
  font-size: 0.875rem;

  ul:first-child {
    top: 10px;
    position: sticky;
    border-left: solid 2px #f1f3f5;
    padding: 0.25rem 0.75rem;
    width: 240px;
    p {
      margin: 0;
    }
    a {
      font-weight: 400;
      text-decoration: none;
      color: #868e96;
      &:hover {
        color: var(--color-text);
      }
    }
    li {
      margin: 0.25rem 0 0 0;
    }
  }
  ul {
    list-style: none;
    margin: 0.25rem 0 0 1.25rem;
  }
  @media screen and (max-width: 1400px) {
    display: none;
  }
`
function TOC({ tableOfContents }: { tableOfContents: string }) {
  return (
    <TableOfContents
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    ></TableOfContents>
  )
}
export default TOC
