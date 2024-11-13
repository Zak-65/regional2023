import { useEffect, useState } from "react";
import FilterAchats from "../smallComponents/FilterAchats";
import FormAddAchats from "../smallComponents/FormAddAchat";
import Table from "../smallComponents/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col w-full p-4" >
        <Link to={"/facture"} type="button" className=" text-center w-48 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Facture
        </Link>
      </div>
      <FilterAchats handleChangeFilter={handleChangeFilter} />
      <Table filtredAchats={filtredAchats} produits={produits} clients={clients} />
    </>
  );
}
