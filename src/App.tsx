import { HashRouter, useRoutes } from "react-router-dom"
import { routeTree } from "@/route/route"
import "@/App.css"
const Router = () => {
  const routes = useRoutes(routeTree)
  return routes
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