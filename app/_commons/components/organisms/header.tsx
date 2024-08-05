import { SearchInput } from "../molecules/SearchInput/search-input";

const Header = () => {
  return (
    <div className="header sm:w-[40%] px-1 py-[2.5rem] mx-auto">
      <SearchInput placeholder="Search here" />
    </div>
  );
};

export default Header;
