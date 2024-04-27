import styled from '@emotion/styled'

const TableOfContents = styled.div`
  position: absolute;
  height: 100%;
  padding-top: 100px;
  right: 10px;
  ul:first-child {
    top: 10px;
    position: sticky;
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
