
export default function FilterAchats({ handleChangeFilter }) {
  return (
    <div className="w-full flex justify-center">
      <input
        onChange={handleChangeFilter}
        type="text"
        className="h-10 w-2/4 pr-8 m-4 pl-5 rounded z-0 focus:shadow focus:outline-none "
        placeholder="Filter Achat ..."
      />
    </div>
  );
}
