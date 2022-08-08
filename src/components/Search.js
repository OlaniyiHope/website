import React from 'react'
import {MDBBtn} from "mdb-react-ui-kit"
import "./style.css"
export const Search = ({handleSearch, searchValue, onInputChange}) => {
  return (
    <div className="searchForm">
<form className="d-flex" onSubmit={handleSearch}>
<input type="search" className="form-control" placeholder="search blog..." value={searchValue} onChange={onInputChange} />
<MDBBtn type="submit">Search</MDBBtn>
</form>
    </div>
  )
}
