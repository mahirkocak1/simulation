export default function SearchBar(props) {
  return (
    <div className="search-container">
      <input 
        className="search-input"
        type="text" 
        placeholder="Search for a user..."
        onChange={props.handleSearch}
      />
    </div>
  )
}