import { css } from '@emotion/react'
import { MoonLoader } from 'react-spinners'

const style = {
  wrapper: `text-[#CCD6F6] h-96 w-72 flex flex-col justify-center items-center`,
  title: `font-semibold text-xl mb-12`,
}

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: #64FFDA;
`

export default function TransactionLoader() {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        Transaction in progress
      </div>
      <MoonLoader css={cssOverride} size={50} color={'#64FFDA'} loading={true} />
    </div>
  )
}