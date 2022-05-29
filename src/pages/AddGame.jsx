import axios from "axios";
import React, { useEffect, useState } from "react";


const AddGame = () => {
    var sports = document.getElementById('sports-main-root'); 
    sports?.remove();
 
    const [providers, setProviders] = useState([]); 

    useEffect(() => {
      const getProviders = async () => {
        try {
          const res = await axios.get("https://tipwin360-backend.herokuapp.com/api/casino/providers");  
          setProviders(res.data);  
        } catch (err) {}
      };
      getProviders();
    }, []);

    /////////////////////////////////////////////////////

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
            

            const providerPost = await axios.post('https://tipwin360-backend.herokuapp.com/api/casino/game', provider);
            console.log(providerPost);
            
            if(providerPost){
                alert("SUCCESSFULLY ADDED PROVIDER MARKO! BRAVO!");
                window.location.reload();
            }else{
                alert("SO ZAEBA? EBATE GLUPIOT NE E STAVENO!")
            }

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
                <input type="text" placeholder="game_url" name="game_url" onChange={handleChange} required />
                <select
                        // value={order}
                        // onChange={(e) => {
                        // navigate(getFilterUrl({ order: e.target.value }));
                        // }}
                        name="provider"
                        className="select-pro-bro"
                        required
                        onChange={handleChange}
                    >
                        
                    <option value="0">Choose provider</option>
                    {providers.map((provider) => (
                        <option value={provider.key}>{provider.title}</option>                            
                    ))}
                </select>
                <button>Submit</button>
            </form> 

        </div>
        
    </div>
  );
};

export default AddGame;