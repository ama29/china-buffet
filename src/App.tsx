// import tsconfigPaths from 'vite-tsconfig-paths'
// import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';

import Home from "../pages/home";
import Menu from "../pages/menu";
import Layout from "../src/components/layout";

function App() {

  return (
    <div className="max-w-full min-h-screen m-0 p-0 bg-customCream">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            {/* <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
