import { Route, Routes } from "react-router";
import AjouterAchats from "./components/pages/AjouterAchats";

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<AjouterAchats/>}/>
    </Routes>
  )
}