interface SearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
  return (
    <label>
      search by name:
      <input
        type="text"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.trim())}
      />
    </label>
  );
};
