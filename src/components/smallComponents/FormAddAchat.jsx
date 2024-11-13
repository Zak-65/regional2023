export default function FormAddAchats() {
  return (
        <form className="max-w-sm w-full p-6  m-5 bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:shadow-lg dark:border-gray-700">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Ajouter un achat</h2>

        {/* Name Input */}
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nom
          </label>
          <input
            type="text"
            id="name"
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
            type="text"
            id="prenom"
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
          <select id="product" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option value="" disabled>
              Sélectionnez un produit
            </option>
            <option value="product1">Produit 1</option>
            <option value="product2">Produit 2</option>
            <option value="product3">Produit 3</option>
          </select>
        </div>

        {/* Quantity Input */}
        <div className="mb-5">
          <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Quantité
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Entrez la quantité"
            required
          />
        </div>

        {/* Add Button */}
        <button type="submit" className="w-full py-2.5 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
          Ajouter
        </button>
      </form>
  );
}
