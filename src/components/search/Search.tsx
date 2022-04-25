import useScreen from "../../shared/hooks/useScreen";
import useSearch from "./hooks/useSearch";
import styles from "./Search.module.scss";

const Search = () => {
  const { isMobile } = useScreen();
  const { handleSearchWeather, handleInputChange, error } = useSearch();
  return (
    <div className={styles.wrapper}>
      <input
        className={`${isMobile && styles.mobile}`}
        type="text"
        name="city"
        placeholder="Search weather for city e.g. 'Tallinn'"
        onChange={handleInputChange}
        onKeyPress={handleSearchWeather}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Search;
