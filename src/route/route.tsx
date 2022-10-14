import React from "react";
import { RouteObject } from "react-router-dom"
import LazyLoad from "./config/LazyLoad"

const modules = import.meta.glob('../canvas/**/index.tsx')
const routeTree: RouteNodeType[] = []

interface RouteNodeType {
    path: string;
    element?: React.ReactNode;
    children: [];
}
const formatterRoute = (dirs: string[], element: any, route: RouteNodeType[]) => {
    const dirsItem = dirs[0]
    if (dirs.length < 1) return
    if (dirs.length === 1) {
        route.push({
            path: dirsItem,
            children: [],
            element: LazyLoad(React.lazy(element))
        })
    } else {
        route.map((e, i) => {
            if (dirsItem === e.path) {
                formatterRoute(dirs.slice(1), element, route[i].children)
            }
        })
    }

}
Object.entries(modules).map(([path, element], i) => {
    const dirs = path.replace(/(^\.\.\/|\/index\.tsx$)/g, '').split('/')
    dirs.shift()
    // if (!dirs[0]) dirs.push('/')
    dirs.unshift('/')
    console.log(dirs)
    formatterRoute(dirs, element, routeTree)
})

export {
    routeTree,
    modules
}