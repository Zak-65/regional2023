import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterAchatAction } from "./../../redux/actions/achatActions";
import { ajouterClientAction } from "./../../redux/actions/clientActions";

export default function FormAddAchats({ produits, clients }) {
  const [client, setClient] = useState({ numero: getClientID(clients) });
  const [achat, setAchat] = useState({ numero: client.numero });
  const dispatch = useDispatch();

  function getClientID(list) {
    const clientID = Math.max(...list.map((l) => parseInt(l.numero))) + 1;
    return clientID;
  }

  function handleChangeClient(e) {
    const name = e.target.name;
    const value = e.target.value;

    setClient({ ...client, [name]: value });
  }

  function handleChangeAchat(e) {
    const name = e.target.name;
    const value = e.target.value;

    setAchat({ ...achat, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(achat, client);
    dispatch(ajouterAchatAction(achat));
    dispatch(ajouterClientAction(client));
  }

  return (
    <form
      className="max-w-sm w-full p-6  m-5 bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:shadow-lg dark:border-gray-700"
      onSubmit={handleSubmit}
    >
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Ajouter un achat</h2>

      {/* Name Input */}
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nom
        </label>
        <input
          onChange={handleChangeClient}
          type="text"
          name="nom"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Entrez votre nom"
          required
        />
      </div>

      {/* Prenom Input */}
      <div className="mb-5">
        <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Prénom
        </label>
        <input
          onChange={handleChangeClient}
          type="text"
          name="prenom"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Entrez votre prénom"
          required
        />
      </div>

      {/* Product Select */}
      <div className="mb-5">
        <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Produit
        </label>
        <select
          onChange={handleChangeAchat}
          name="codeProduit"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="" disabled>
            Sélectionnez un produit
          </option>
          {produits.map((p, index) => (
            <option key={index} value={p.codeProduit}>
              {p.intitule}
            </option>
          ))}
        </select>
      </div>

      {/* Quantity Input */}
      <div className="mb-5">
        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Quantité
        </label>
        <input
          onChange={handleChangeAchat}
          type="number"
          name="qte"
          min="1"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Entrez la quantité"
          required
        />
      </div>

      {/* Add Button */}
      <button
        type="submit"
        className="w-full py-2.5 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
      >
        Ajouter
      </button>
    </form>
  );
}
