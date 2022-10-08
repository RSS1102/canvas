import React from "react"
import { Router } from "react-router-dom"
import LazyLoad from "./route/config/LazyLoad"
const modules = import.meta.glob('./canvas/**/index.tsx', {
  import: 'default',
})
console.log("modules", modules,)
const routeTree = []
for (const pathString in modules) {
  /**
   * @desc 处理字符串 `./xxx/xxx/index.tsx`
   * @desc 1.`substring`接去掉最前的"./" 得到的结果是`xxx/xxx/index.tsx`
   * @desc 2.`replace`去掉`/index.tsx`得到的结果是`xxx/xxx` 
   * @desc 2. `split`根据`/`切割数组 
   */
  console.log(pathString)
  const path = pathString.substring(9).replace(/(\/index\.tsx|\.tsx)$/, "")
  const pathArr = path.split('/')
  console.log(path)
  console.log(pathArr)

  // 动态导入必须 以`./foo/${bar}.js`, `https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations

  routeTree.push(
    {
      path: path,
      element: LazyLoad(React.lazy(() => import(`./canves/${path}.tsx`))),
      children: [],
    },
  )
  /**
 * @desc 需求数组样式
 * @desc 根据目录层级生成children
 * @desc 如只有文件夹没有`index.tsx`则不生成element，但依然生成路由层级
 * @desc  import(`./canvas/rotatingstars/index`))), 可以写成 import(`./canves/${path}.tsx`))),
 * 
 * 
 */
  routeTree.push(
    {
      path: 'rotatingstars',
      element: LazyLoad(React.lazy(() => import(`./canvas/rotatingstars/index`))),
      children: [],
    },
    {
      path: 'start',
      element: LazyLoad(React.lazy(() => import(`./canvas/start/index`))),
      children: [
        {
          path: 'start1',
          element: LazyLoad(React.lazy(() => import(`./canvas/start/start1/index`))),
          children: [
            {
              path: 'start2',
              element: LazyLoad(React.lazy(() => import(`./canvas/start/start1/start2/index`))),
              children: [],
            },
          ],
        },
      ],
    },
  )
}




function App() {

  return (
    <div className="App">
      13
    </div>
  )
}

export default App
