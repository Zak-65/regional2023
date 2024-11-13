export default function FormAddAchats() {
  return (
    <form className="max-w-sm mx-auto">
      {/* Name Input */}
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Prenom Input */}
      <div className="mb-5">
        <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Prenom
        </label>
        <input
          type="text"
          id="prenom"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your prenom"
          required
        />
      </div>

      {/* Product Select */}
      <div className="mb-5">
        <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Product
        </label>
        <select
          id="product"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        >
          <option value="" disabled selected>
            Select a product
          </option>
          <option value="product1">Produit 1</option>
          <option value="product2">Produit 2</option>
          <option value="product3">Produit 3</option>
        </select>
      </div>

      {/* Quantity Input */}
      <div className="mb-5">
        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          min="1"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter quantity"
          required
        />
      </div>

      {/* Add Button */}
      <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter</button>
    </form>
  );
}
