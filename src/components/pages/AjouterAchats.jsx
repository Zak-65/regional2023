import { useEffect, useState } from "react";
import FilterAchats from "../smallComponents/FilterAchats";
import FormAddAchats from "../smallComponents/FormAddAchat";
import Table from "../smallComponents/Table";
import { useSelector } from "react-redux";

export default function AjouterAchats() {
  const achats = useSelector((state) => state.achatReducer.achats);
  const clients = useSelector((state) => state.clientReducer.clients);
  const produits = useSelector((state) => state.produitReducer.produits);

  const [filtredAchats, setFiltredAchats] = useState([...achats]);

  useEffect(() => {
    setFiltredAchats([...achats]);
  }, [achats]);

  function handleChangeFilter(e) {
    const clientID = e.target.value;
    if (!clientID) {
      setFiltredAchats(achats);
    } else {
      const newFiltredAchats = achats.filter((item) => item.numero == clientID);
      setFiltredAchats(newFiltredAchats);
    }
  }

  return (
    <>
      <FormAddAchats produits={produits} clients={clients} />
      <FilterAchats handleChangeFilter={handleChangeFilter} />
      <Table filtredAchats={filtredAchats} produits={produits} clients={clients} />
    </>
  );
}
