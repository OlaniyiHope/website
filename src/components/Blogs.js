import React from 'react'
import {MDBCol, MDBCard, MDBCardTitle, MDBCardBody, MDBCardImage, MDBCardText, MDBRow} from "mdb-react-ui-kit"
import {Link} from "react-router-dom"
import Badge from './Badge'
export const Blogs = ({title, category, description, id, imageUrl, excerpt}) => {

  return (
    <MDBRow>
  <MDBCol>
<MDBCard className="h-100 mt-2" style={{maxWidth: "22rem"}}>
<MDBCardImage src={imageUrl} 
alt={title}
position="top"
style={{maxWidth: "100%", height: "180px"}}
/>
<MDBCardBody>
    <MDBCardTitle>
        {title}
    </MDBCardTitle>
    <MDBCardText>
        {excerpt(description)}
        <Link to={`/blog/${id}`}>Read more</Link>
    </MDBCardText>
    <Badge>{category}</Badge>
    <p>{category}</p>
   
</MDBCardBody>
</MDBCard>
  </MDBCol>
  </MDBRow>
  )
}
