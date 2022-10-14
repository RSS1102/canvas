import { modules } from "@/route/route";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./index.css";
let dirsPath: string[] = []

Object.entries(modules).map(([path, element], i) => {
    let dirs = path.replace(/(^\.\.\/|canvas|\/index\.tsx$)/g, '')
    dirs == "" ? dirs = '/' : ""
    dirsPath.push(dirs)
})

function Index() {
    const [dirsRoute, setDirsRoute] = useState<string[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        setDirsRoute(dirsPath)
    }, [dirsRoute])
    return (
        <>
            <div>{dirsRoute.map((e, i) => {
                return (<i key={i}>
                    <button onClick={() => { navigate(e) }}>{e.slice(e.lastIndexOf('/'))}</button>
                </i>)
            })}</div>
            <Outlet />
        </>
    )
}
export default Index