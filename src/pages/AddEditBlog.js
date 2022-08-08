import React, {useState, useEffect} from 'react'
import axios from "axios"
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const initialState = {
    title: "",
    description: "",
    category: "",
    imageUrl: "",

}

const options = ["Music", "Sports", "Tech", "Memes", "News", "Food"]; 
export const AddEditBlog = () => {
    const [formValue, setFormValue] = useState(initialState);
    const [categoryErrMsg, setCategoryErrMsg] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const {title, description, category, imageUrl} = formValue;
const navigate = useNavigate();

const {id} = useParams();
useEffect(() => {
if(id){
    setEditMode(true);
    getSingleBlog(id);
}else{
    setEditMode(false);
    setFormValue({...initialState});
}
}, [id]);
const getSingleBlog = async (id) => {
const singleBlog = await axios.get(`http://localhost:5000/blogs/${id}`);
if(singleBlog.status === 200){
    setFormValue({...singleBlog.data});
}else{
    toast.error("something went wrong ")
}

}

    const getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0")
        let mm = String(today.getMonth() + 1).padStart(2, "0")
        let yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;
        return today;
    }

const handleSubmit = async (e) => {
    e.preventDefault();
    if(!category) {
        setCategoryErrMsg("please select a category");
    };
  
    if(title && description && imageUrl && category){
        const currentDate = getDate();
        if(!editMode){
            const updatedBlogData = {...formValue, date: currentDate};
            const response = await axios.post("http://localhost:5000/blogs", updatedBlogData);
            if(response.status === 201) {
                toast.success("Blog created successfully");
            }
            else{
                toast.error("something went wrong");
            }
        }else{
            const response = await axios.put(`http://localhost:5000/blogs/${id}`, formValue);
            if(response.status === 200) {
                toast.success("Blog Updated successfully");
            }
            else{
                toast.error("something went wrong");
            }
        }
       
       
        setFormValue({title: "", description: "", category: "", imageUrl: ""});
        navigate("/home");
    }
};
const onInputChange = (e) => {
    let {name, value} = e.target;
    setFormValue({...formValue, [name]: value});
};
const onUploadImage = (file) => {
    console.log("file", file);
    const formData = new FormData();
    formData.append("file", file) 
    formData.append("upload_preset", "aedc6sty");
    axios.post("http://api.cloudinary.com/v1_1/dftygokow/image/upload", formData).then((resp) => {
   toast.info("image uploaded successfully");
   setFormValue({...formValue, imageUrl: resp.data.url})
        
    }).catch((err) => {
        toast.error("something went wrong")
    })
};
const onCategoryChange = (e) => {
    setCategoryErrMsg(null);
    setFormValue({...formValue, category: e.target.value})
};

  return (
<MDBValidation className="row g-3" style={{marginTop: "100px"}} noValidate onSubmit={handleSubmit}>
<p className='fs-2 fw-bold' style={{textAlign: "center"}}>{editMode ? "Update Blog" : "Add Blog"}</p>
<div style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center"}}>


<MDBInput
        value={title || ""}
        name="title"
        type="text"
        onChange={onInputChange}
        required
        validation="Please provide a title" />
<br></br>
<MDBInput
         value={description || ""}
        name="description"
        type="text"
        onChange={onInputChange}
        required
        label="Description"
        validation="Please provide a description" 
        textarea
        invalid />
<br></br>
{!editMode && (
<MDBInput
 
   type="file"
    onChange={(e) => onUploadImage(e.target.files[0])} 
    required  validation="Please provide a title" invalid />
)}

<br></br>
<select style={{width: "100%", borderRadius: "4px", height: "35px", borderColor: "#000"}} onChange={onCategoryChange} value={category}>
<option>Please select category</option>
{options.map((option, index) => (
    <option value={option || ""} key={index}>{option}</option>
))}
</select>
{categoryErrMsg && (
    <div className="categoryErrorMsg" style={{ color: "#f00",textAlign: "left", fontSize: "14"}}>{categoryErrMsg}</div>
)}
<br></br>

<MDBBtn type="submit" style={{marginRight: "10px"}}>{editMode? "Update" :"Add"}</MDBBtn>
<MDBBtn color="danger" style={{marginRight: "10px"}} onClick={() => navigate("/")}>Go back</MDBBtn>
</div>
</MDBValidation>
  )
}
