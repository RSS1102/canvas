// https://reactrouter.com/en/main/components/outlet#outlet
import { Outlet } from "react-router-dom"
function Test1() {
    return (
        <>
            <div>Test1</div>
            <Outlet />
        </>
    )
}
export default Test1