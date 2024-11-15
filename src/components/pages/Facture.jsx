import { useSelector } from "react-redux";
import SelectClient from "../smallComponents/SelecteClient";
import Table from "../smallComponents/Table";
import { useState } from "react";

export default function Facture() {
  const clients = useSelector((state) => state.clientReducer.clients);
  const achats = useSelector((state) => state.achatReducer.achats);
  const produits = useSelector((state) => state.produitReducer.produits);
  const [filtredAchats, setFiltredAchats] = useState([...achats]);


  function handleChangeSelect(e) {
    const clientSelected = e.target.value;
    if (!clientSelected) {
      setFiltredAchats(achats)
    } else {
      const newfiltredAchats = achats.filter((achat) => {
        return achat.numero === clientSelected;
      });
      setFiltredAchats(newfiltredAchats);
    }
  }

  return (
    <>
      <SelectClient clients={clients} handleChangeSelect={handleChangeSelect} />
      <Table filtredAchats={filtredAchats} produits={produits} clients={clients} />
    </>
  );
}
