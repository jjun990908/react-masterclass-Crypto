import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

interface IRouterProps{
}

function Router({}:IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin/>}>
        <Route path="chart" element={<Chart/>} />
        <Route path="price" element={<Price />} />
        </Route>
        <Route path="/" element={<Coins/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
