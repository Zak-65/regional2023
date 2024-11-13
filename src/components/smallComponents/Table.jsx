import { useSelector } from "react-redux";

export default function Table() {
  const produits = useSelector((state) => state.produitReducer.produits);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
              buyer name
            </th>
            <th scope="col" className="px-6 py-3">
              intitule
            </th>
            <th scope="col" className="px-6 py-3">
              Quantite
            </th>
            <th scope="col" className="px-6 py-3">
              totale
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Supprimer</span>
            </th>
          </tr>
        </thead>
        <tbody>

          {
            produits.map(produit => {
              return(
                
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
