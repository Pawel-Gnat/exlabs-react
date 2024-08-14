interface SearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
  return (
    <>
      <label className="sr-only" htmlFor="search">
        Search by name
      </label>
      <input
        id="search"
        type="text"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.trim())}
        className="rounded-xl border p-4 shadow-2xl"
        placeholder="Search by name..."
      />
    </>
  );
};
