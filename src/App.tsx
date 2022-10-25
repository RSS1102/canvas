import { HashRouter, useRoutes } from "react-router-dom"
import { routeTree } from "@/route/routeTree"
import "@/App.css"
const Router = () => {
  return useRoutes(routeTree)
}
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  )
}

export default App
