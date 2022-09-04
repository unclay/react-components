
import * as React from 'react'

export default function Toast() {
  return (
    <>
      <div id='androidClose' role='option' aria-label='关闭' className='weui-mask'></div>
      <div className='weui-actionsheet'>
          <div className='weui-actionsheet__menu'>
              <div role='button' className='weui-actionsheet__cell'>示例菜单</div>
              <div role='button' className='weui-actionsheet__cell'>示例菜单</div>
              <div role='button' className='weui-actionsheet__cell'>示例菜单</div>
          </div>
      </div>
    </>
  )
}