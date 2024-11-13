import { Route, Routes } from "react-router";
import AjouterAchats from "./components/pages/AjouterAchats";
import Facture from "./components/pages/Facture";

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<AjouterAchats/>}/>
      <Route path="/facture" element={<Facture/>}/>
    </Routes>
  )
}