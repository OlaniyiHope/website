import React, { useEffect, useState } from 'react'
import {MDBRow, MDBCol, MDBContainer, MDBTypography, 
  MDBCard, MDBCardTitle, MDBCardBody, MDBCardImage, MDBCardText, MDBIcon } from "mdb-react-ui-kit"
  import {useParams, Link} from "react-router-dom"
  import axios from "axios"
  import Badge from '../components/Badge'
  import {toast} from "react-toastify"
  import './style.css'
import Footer from '../components/Footer'
export const Blog = () => {
  
  const [blog, setBlog] = useState();
  const [relatedPost, setRelatedPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
  if(id) {
    getSingleBlog();
  }
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps


  const getSingleBlog = async () => {
    const response = await axios.get(`https://olaniyihope.herokuapp.com/blogs/${id}`);
    const relatedPostData = await axios.get(`https://olaniyihope.herokuapp.com/blogs?category=${response.data.category}&_start=0&_end=3`);
    setRelatedPost(relatedPostData.data);
    if(response.status === 200 || relatedPostData.status === 200) {
      setBlog(response.data);
      setRelatedPost(relatedPostData.data);
    }else{
      toast.error("something went wrong")
    }
  }

  const excerpt = (str) => {
    if(str.length > 60) {
      str = str.substring(0, 60) + " ... ";
    }
    return str;
    };
  const styleInfo = {
    display: "inline",
    marginLeft: "5px",
    float: "right",
    marginTop: "7px"
  }
  return (
<MDBContainer style={{border: "1px", color: "#fff", textAlign: "center"}}>
<Link to="/homes">
  <strong style={{float: "left", color: "#fff"}} className="mt-3">
    Go Back
  </strong>
</Link>

<img src={blog && blog.imageUrl} className="img-fluid rounded" alt={blog && blog.title} style={{width: "100%", maxHeight: "600px"}}/>
<MDBTypography tag="h2" className="text-muted mt-2" style={{display: "inline-block"}}>
  {blog && blog.title}
</MDBTypography>
<div style={{marginTop: "20px"}}>
<div style={{height: "43px", background: "#f6f6f6"}}>
<MDBIcon 
style={{float: "left"}}
className="mt-3"
icon="calender-alt"
size="lg"
/>
<strong style={{float: "left", marginTop: "12px", marginLeft: "2px"}}>
  {blog && blog.date}
</strong>
<Badge styleInfo={styleInfo}>{blog && blog.category}</Badge>

</div>
<MDBTypography className="lead md-0">
{blog && blog.description}
</MDBTypography>
</div>
{relatedPost && relatedPost.length > 0 && (
  <>
  {relatedPost.length > 1 && (
    <h1 style={{color: "#fff"}}>RELATED POST </h1>
  )}
  <MDBRow className="row-cols-1 row-cols-md-3 g-4">
{relatedPost.filter((item) => item.id !== id).map((item, index) => (
  <MDBCol>
<MDBCard>
  <Link to={`/blog/${item.id}`}>
    <MDBCardImage 
    src={item.imageUrl}
    alt={item.title}
    position="top"
    style={{color: "#000"}}
    />
  </Link>
  <MDBCardBody>
    <MDBCardTitle  style={{color: "#000"}}>{item.title}</MDBCardTitle>
    <MDBCardText  style={{color: "#000"}}>{excerpt(item.description)}</MDBCardText>
  </MDBCardBody>
</MDBCard>
  </MDBCol>
   
))}
  </MDBRow>
  </>
)}

</MDBContainer>

  )
}
