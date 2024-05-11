import styled from '@emotion/styled'
import React, { createRef, FunctionComponent, useEffect } from 'react'

const src = 'https://giscus.app/client.js'
const repo = 'HiBixby/HiBixby.github.io' // 자신 계정의 레포지토리로 설정
const id = 'R_kgDOHeAggw'
const category = 'Comments'
const categoryId = 'DIC_kwDOHeAgg84CfSZE'

type GiscusAttributesType = {
  src: string
  'data-repo': string
  'data-repo-id': string
  'data-category': string
  'data-category-id': string
  'data-mapping': string
  'data-strict': string
  'data-reactions-enabled': string
  'data-emit-metadata': string
  'data-input-position': string
  'data-theme': string
  'data-lang': string
  crossorigin: string
  async: string
}
const GiscusWrapper = styled.div`
  width: 100%;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const GiscusWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const giscus: HTMLScriptElement = document.createElement('script')

    const attributes: GiscusAttributesType = {
      src,
      'data-repo': repo,
      'data-repo-id': id,
      'data-category': category,
      'data-category-id': categoryId,
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': 'preferred_color_scheme',
      'data-lang': 'ko',
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      giscus.setAttribute(key, value)
    })

    element.current.appendChild(giscus)
  }, [])

  return <GiscusWrapper ref={element} />
}

export default GiscusWidget
