import { HashRouter, useRoutes } from "react-router-dom"
import { routeTree } from "@/route/route"
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
