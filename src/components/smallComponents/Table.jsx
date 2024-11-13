import { useDispatch } from "react-redux";
import { supprimerAchatAction } from "../../redux/actions/achatActions";

export default function Table({ produits, filtredAchats, clients }) {
  const dispatch = useDispatch();
  function handleDelete(numero, codeProduit) {
    dispatch(supprimerAchatAction(numero, codeProduit));
  }

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        All Achats
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Vous pouvez supprimer les achats que vous souhaitez parmi tous les achats effectués.
        </p>
      </caption>
      <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            id
          </th>
          <th scope="col" className="px-6 py-3">
            buyer name
          </th>
          <th scope="col" className="px-6 py-3">
            intitule
          </th>
          <th scope="col" className="px-6 py-3">
            Quantite
          </th>
          <th scope="col" className="px-6 py-3">
            Prix
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Supprimer</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {filtredAchats.map((achat, index) => {
          const client = clients.find((c) => c.numero == achat.numero);
          const produit = produits.find((p) => p.codeProduit == achat.codeProduit);

          return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
              <td className="px-6 py-4">{client.numero}</td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {`${client.nom} ${client.prenom}`}
              </th>
              <td className="px-6 py-4">{produit.intitule}</td>
              <td className="px-6 py-4">{achat.qte}</td>
              <td className="px-6 py-4">{produit.prix}</td>
              <td className="px-6 py-4 text-right">
                <button
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  onClick={() => handleDelete(achat.numero, achat.codeProduit)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
