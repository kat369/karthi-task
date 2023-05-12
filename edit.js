const handlesubmit = async (e) => {
    e.preventDefault();
    const frmdata = new FormData(e.target);

    const value = Object.fromEntries(frmdata.entries());
    console.log(value.file.name);

    if(value.file.name == "" ){
      console.log("update data")
      let edit = await axios.post(`${env.api}/updatetask/${params.id}`,values)

    }else{
      console.log("insert data")
      
      
      let newinsert = await axios.post(`${env.api}/createtask/${params.id}`,values)

      if{newinser == sucess}{
        let remove1 = await axios.post(`${env.api}/deletetask/${params.id}`,obj id)
      }else{
        
      }
      
        }
  };
