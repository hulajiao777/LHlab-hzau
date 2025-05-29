'use client'

import { useEffect, useState } from "react";
import Post from "../components/Post";
import { getMd } from "@/components/fetch-md";
export const fetchCache = 'force-no-store';


//网站首页
// 研究方向
// 研究成果
// 组内成员
// 联系我们
const catMap:Record<string, string> = {
  'home': '网站首页',
  'member': '师资力量',
  'direct': '研究方向与成果',
  'Admission': '招生信息及毕业去向',
  'contact': '联系我们',
}


export default function Home() {
  const [cat, setCat] = useState('home')
  const [post, setPost] = useState("")

  useEffect(()=>{
    catNotes('home')
  },[])

  function catNotes(cat: any) {
    getMd(cat).then(res => {
      setCat(cat)
      //@ts-ignore
      setPost(res)
    })
  }

  return (
    <>
      <header>
        <Counter></Counter>
        <div className="logo">
          <div className="top content">
            <h1 className="headline"><img src="https://www.hzau.edu.cn/images/LOGO.png" alt="" className="hlogo" />
              资源环境信息工程</h1>
          </div>
        </div>

      </header>
      <nav className='angled'>
        <div className="content nav">

          <div className="search">
            {/* <input type="text" placeholder="支持搜索标题和GV号" onInput={(e:any)=>changeKey(e.target.value)}/>
                      <button onClick={search}>{'(⌐■_■)'}</button> */}
          </div>
          <ul>
            {Object.keys(catMap).map(item => {
              return <li className={item === cat ? 'active' : ''} onClick={() => catNotes(item)} key={item}>{catMap[item]}</li>
            })} 

          </ul>

        </div>
      </nav>

      <main className="wrap">
        <Post post={post} />

      </main ></>

  );
}

function Counter(){
  const [count, setCount] = useState('')

  useEffect(()=>{
    setInterval(()=>{
      var stamp= new Date().getTime() + 8 * 60 * 60 * 1000
      setCount(new Date(stamp).toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0, 19))
    })
  },[])
  return <div className="counter">欢迎来到我的网站，现在时间为{count}</div>
}