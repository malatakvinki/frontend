import axios from "axios";
import React, { useState } from "react";


const AddProviders = () => {
    var sports = document.getElementById('sports-main-root'); 
    sports?.remove();

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
        });
    };


    const [file, setFile] = useState();
    // const [filename, setFilename] = useState('Choose File');

    const onChange = e => {
        setFile(e.target.files[0]);
        // setFilename(e.target.files[0].name);
    };


    const onSubmit = async e => {
        e.preventDefault();
        console.log("Submit");
        
        const formData = new FormData();
        formData.append("image", file);


        try {

            const res = await axios.post('https://tipwin360-files.herokuapp.com/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });

            const image_url = res.data.filePath;
            const provider = { ...inputs, img: image_url }; 
            

            const providerPost = await axios.post('https://tipwin360-backend.herokuapp.com/api/casino/provider', provider);
            console.log(providerPost);


        }catch(err){
            console.log(err);
        }
    }
  
    return (
    <div className='nh-bos'>  

        <div className="addprovider">
            <form onSubmit={onSubmit}>
                <input accept="image/*" type="file" placeholder="img" onChange={onChange}  required/>
                <input type="text" placeholder="title" name="title" onChange={handleChange} required />
                <input type="text" placeholder="key" name="key" onChange={handleChange} required />
                <button>Submit</button>
            </form> 

        </div>
        
    </div>
  );
};

export default AddProviders;