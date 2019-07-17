import * as React from 'react'
import { useState } from 'react'
import Input from '../packages/input/input'
import Icon from '../packages/icon/icon'

export default function(props: any) {
  const [error] = useState('用户名不能为空')
  const [value, setValue] = useState('')
  const [enterVal, setEnterVal] = useState('')
  const [keyDownVal, setKeyDownVal] = useState('')
  const onChange = (e: React.FormEvent) => {
    setValue((e.target as HTMLInputElement).value)
  }
  const onEnter = (e: React.FormEvent) => {
    setEnterVal((e.target as HTMLInputElement).value)
  }
  const onKeyDown = (e: React.FormEvent) => {
    setKeyDownVal((e.target as HTMLInputElement).value)
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <h3>三种尺寸</h3>
        <div className="custom-input">
          <Input value={value} onChange={onChange} size="big" />
          <Input value={value} onChange={onChange}  />
          <Input value={value} onChange={onChange} size="small" />
        </div>
      </div>
      <div className="exp-section">
        <h3>错误提示</h3>
        <div className="custom-input">
          <Input label="用户名：" labelPosition="top" error={error} errorPosition="right" type="text"/>
          <Input label="用户名：" labelPosition="left" error={error} errorPosition="right" type="text"/>
          <Input label="用户名：" labelPosition="left" error={error} errorPosition="bottom" type="text"/>
        </div>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
        <div className="custom-input">
          <Input label="用户名" labelPosition="top" value="hello" disabled type="text"/>
          <Input label="密码" labelPosition="top" value="123456" disabled type="password"/>
        </div>
      </div>
      <div className="exp-section">
        <h3>自定义样式</h3>
        <div className="custom-input">
          <Input addOnBefore="Http://" addOnAfter=".com" />
          <Input addOnAfter={<Icon name="settings" />} />
          <Input addOnAfter="搜索" className="custom-input-search" />
          <Input before={<Icon name="settings" />} />
          <Input after={<Icon name="thumbs-up" />} />
          <Input before={<Icon name="date"/>} after={<Icon name="error" />} />
        </div>
      </div>
      <div className="exp-section">
        <h3>自定义触发事件</h3>
        <div className="custom-input">
          <Input onEnter={onEnter} />
          <div>enter event value: {enterVal}</div>
        </div>
        <div className="custom-input">
          <Input onKeyDown={onKeyDown} />
          <div>enter event value: {keyDownVal}</div>
        </div>
      </div>
      <div className="exp-section">
        <h3>支持的类型</h3>
        <div className="custom-input">
          <Input type="text" placeholder="text" />
          <Input type="number" placeholder="number" />
          <Input type="password" placeholder="password" />
          <Input type="email" placeholder="email" />
          <Input type="date" />
          <Input type="time" />
          <Input type="tel" placeholder="tel" />
          <Input type="url" pattern="https://.*" placeholder="url" />
          <Input type="search" placeholder="search" />
        </div>
      </div>
    </div>
  )
}
