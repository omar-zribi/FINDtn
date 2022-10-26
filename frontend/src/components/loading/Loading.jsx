import React from 'react'
import LoadingCSS from './Loading.module.css'

const Loading = () => {
  return (
    <div className={LoadingCSS.loadingcard}>
  <div className={LoadingCSS.loaderr}>
    <div  className={LoadingCSS.scanner}>
      <h1>Loading...</h1>
    </div>
  </div>
</div>
  )
}

export default Loading