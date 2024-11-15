import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterAchatAction } from "./../../redux/actions/achatActions";
import { modifierProduitAction } from "../../redux/actions/produitActions";

export default function FormAddAchats({ produits, clients }) {
  const [achat, setAchat] = useState({});
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    qteStock: 0,
  });

  function handleChangeAchat(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name == "codeProduit") {
      setProduct({ ...produits.find((p) => p.codeProduit == value) });
    }

    setAchat({ ...achat, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProduct({ ...product, qteStock: product.qteStock - achat.qte });
    dispatch(ajouterAchatAction(achat));
    dispatch(modifierProduitAction(product));
  }

  return (
    <form
      className="max-w-sm w-full p-6  mt-28 bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:shadow-lg dark:border-gray-700"
      onSubmit={handleSubmit}
    >
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Ajouter un achat</h2>

      <div className="mb-5">
        <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Client
        </label>
        <select
          defaultValue={""}
          onChange={handleChangeAchat}
          name="numero"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="" disabled>
            Sélectionnez un Client
          </option>
          {clients.map((c, index) => (
            <option key={index} value={c.numero}>
              {`${c.nom} ${c.prenom}`}
            </option>
          ))}
        </select>
      </div>

      {/* Product Select */}
      <div className="mb-5">
        <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Produit
        </label>
        <div className="flex gap-3 items-center justify-between">
          <select
            defaultValue={""}
            onChange={handleChangeAchat}
            name="codeProduit"
            className="shadow-sm w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <span className="w-1/3 flex gap-2 items-center">
            Qte: <span className={`${product.qteStock < 5 ? "text-red-400" : "text-green-400"} font-extrabold`}>{product.qteStock}</span>
          </span>
        </div>
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
        disabled={product.qteStock == 0 ? true : false}
        type="submit"
        className="w-full py-2.5 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
      >
        Ajouter
      </button>
    </form>
  );
}
