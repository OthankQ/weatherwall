type SearchbarProps = {
  handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSearchClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  cityName: string;
};

const Searchbar = (props: SearchbarProps) => {
  const { handleInputChange, handleSearchClick, handleEnter, cityName } = props;

  return (
    <div className="App">
      <input
        type="text"
        onChange={handleInputChange}
        value={cityName}
        onKeyDown={handleEnter}
      />

      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbar;
