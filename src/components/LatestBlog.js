import React from 'react'
import {MDBCard, MDBRow, MDBCol, MDBCardBody, MDBCardGroup, MDBCardImage} from "mdb-react-ui-kit"
import {Link} from "react-router-dom"
import "./style.css"
export const LatestBlog = ({imageUrl, title, id}) => {
  return (
    <div>
        <Link to={`/blog/${id}`}>
        <MDBCardGroup>
            <MDBCard style={{maxWidth: "300px", height: "80px", margin: "auto"}} className="mt-2">
<MDBRow className="g-0" >
<MDBCol>
<MDBCardImage 
src={imageUrl}
alt={title}
fluid
className="rounded-circle"
style={{height: "80px"}}
/>

</MDBCol>
<MDBCol>
<MDBCardBody>
    <p className="text-start latest-title">{title}</p>
</MDBCardBody>
</MDBCol>
</MDBRow>
            </MDBCard>
            </MDBCardGroup>
        </Link>
    </div>
  )
}
