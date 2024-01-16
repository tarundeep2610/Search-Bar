const SearchBar = (props) => {
  return (
    <div className="search-input">
        <input placeholder='Add new user...' value={props.searchTerm} onChange={(e) => {
             props.setInput(e.target.value);
        }}  onFocus={() => props.handleFocus(true)}
      onBlur={() => setTimeout(() => props.handleFocus(false),50)}/>
    </div>
  )
}

export default SearchBar