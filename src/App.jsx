import { NavLink, useRoutes,useInRouterContext } from "react-router-dom";
import routes from "./routes/index.js";
import Header from './components/Header'


function App() {
  function computedClassName({ isActive }) {
    return isActive ? "list-group-item highlight" : "list-group-item";
  }

  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes);
  console.log('****',useInRouterContext())  //true

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
            <NavLink className={computedClassName} to="/about">
              About
            </NavLink>
            <NavLink className={computedClassName} end to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/about" />} />
              </Routes> */}

              {
                element
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
