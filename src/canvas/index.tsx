
import { dirsPath } from "@/route/route";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./index.css";

function Index() {
    const [dirsRoute, setDirsRoute] = useState<string[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        setDirsRoute(dirsPath)
    }, [dirsRoute])
    return (
        <>
            <div className="outlet-index">{dirsRoute.map((e, i) => {
                return (<i key={i}>
                    <button onClick={() => { navigate(e) }}>{e.slice(e.lastIndexOf('/'))}</button>
                </i>)
            })}</div>
            <Outlet />
        </>
    )
}
export default Index