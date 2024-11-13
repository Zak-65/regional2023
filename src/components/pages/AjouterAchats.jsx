import FilterAchats from "../smallComponents/FilterAchats";
import FormAddAchats from "../smallComponents/FormAddAchat";
import Table from "../smallComponents/Table";
import { useSelector } from "react-redux";

export default function AjouterAchats() {
  const achats = useSelector((state) => state.achatReducer.achats);
  const clients = useSelector((state) => state.clientReducer.clients);
  const produits = useSelector((state) => state.produitReducer.produits);
  return (
    <>
      <FormAddAchats produits={produits} clients={clients} />
      <FilterAchats />
      <Table achats={achats} produits={produits} clients={clients} />
    </>
  );
}
