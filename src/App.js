import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchVideo from "./components/SearchVideo";


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "watch",
      element: <WatchPage />,
    },
    {
      path: "results",
      element: <SearchVideo />,
    },
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className="bg-black ">
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
