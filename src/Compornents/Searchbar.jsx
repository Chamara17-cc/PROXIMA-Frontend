import React from 'react'

export default function Searchbar() {
  return (
<<<<<<< Updated upstream
    <div className="searchbar"><i class="bi bi-search"></i><input type="text" placeholder='Search' />
    <div></div>                {/*Add serchbar codes here*/}
=======
    <div className="searchbar"><i className="bi bi-search"></i><input type="text" placeholder='Search' />
    <div style={{ position: "relative" }}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search here.........."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} // Ensure this is correctly bound
          style={{ padding: "0.375rem 2.375rem 0.375rem 0.75rem", width: "200px" }}
      />
      <button 
        className="btn btn-secondary" 
        type="button" 
        onClick={handleSearch}
        style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", border: "none", background: "transparent" , color:"#979799"}} // Adjust styling for button
      >
        {/* <FontAwesomeIcon icon={faSearch} /> */}
      </button>
>>>>>>> Stashed changes
    </div>
  )
}
