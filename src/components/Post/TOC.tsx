import styled from '@emotion/styled'

const TableOfContents = styled.div`
  position: absolute;
  height: 100%;
  padding-top: 100px;
  left: calc((100% - 768px) / 2 + 768px);
  margin-left: 3rem;
  font-size: 0.875rem;
  color: #868e96;
  ul:first-child {
    top: 10px;
    position: sticky;
    border-left: solid 2px #f1f3f5;
    padding: 0.25rem 0.75rem;
  }
  ul {
    list-style: none;
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
