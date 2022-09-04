import * as React from 'react'

export default function Toast() {
  return (
    <>
      <div className='weui-mask_transparent'></div>
      <div className='weui-toast weui-toast_text'>
        <p className='weui-toast__content'>文字提示</p>
      </div>
    </>
  )
}