import React from 'react'
import {MDBListGroup, MDBCard, MDBListGroupItem} from "mdb-react-ui-kit"
export const Category = ({handleCategory, options}) => {
  return (
    <MDBCard style={{width: "18rem", marginTop: "100px", height: "auto", margin: "auto"}}>
<h4>Categories</h4>
<MDBListGroup flush>
{options.map((item, index) => (
    <MDBListGroupItem key={index} style={{cursor: "pointer"}} onClick={() => handleCategory(item)}>
        {item}
    </MDBListGroupItem>
))}
</MDBListGroup>
    </MDBCard>
  )
}
