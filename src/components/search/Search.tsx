import useScreen from "../../shared/hooks/useScreen";
import useSearch from "./hooks/useSearch";
import styles from "./Search.module.scss";

const Search = () => {
  const { isMobile } = useScreen();
  const { handleSearchWeather, handleInputChange, error, input } = useSearch();
  return (
    <div className={styles.wrapper}>
      <input
        className={`${isMobile && styles.mobile}`}
        value={input}
        type="text"
        name="city"
        placeholder="City e.g. 'tallinn'"
        onChange={handleInputChange}
        onKeyPress={handleSearchWeather}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Search;
