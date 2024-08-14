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
        className="rounded-xl border p-4 shadow-2xl"
        id="search"
        name="search"
        onChange={(e) => setSearchQuery(e.target.value.trim())}
        placeholder="Search by name..."
        type="text"
        value={searchQuery}
      />
    </>
  );
};
