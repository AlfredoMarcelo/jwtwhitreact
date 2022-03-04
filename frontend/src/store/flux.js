export const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "http://127.0.0.1:5000/",
      userData: [],
      authorized: false,
      error: null
    },
    actions: {


      isAuthenthicated: () => {
        if (sessionStorage.getItem("isAuth")) {
          setStore({
            authorized: JSON.parse(sessionStorage.getItem("isAuth")),
            userData: JSON.parse(sessionStorage.getItem("userData")),
          });
        }
      },


      register: (data) => {
        fetch(`http://127.0.0.1:5000/api/register`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((resp) => resp.json())
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      },
      login: async (data,history)=>{ //falta agregar history para redireccionar
        const request = {
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify(data)
        }

        try{
        const resp = await fetch("http://127.0.0.1:5000/api/login",request)
        
        const infoUser = await resp.json()
        if (infoUser.msg){
          setStore({
            error: infoUser.msg
          })
        }else{
          setStore({
            userData:infoUser,
            authorized:true,
            error:null
          })

          sessionStorage.setItem("isAuth", true);
          sessionStorage.setItem("userData", JSON.stringify(infoUser))
          /* history.push("/") */
          console.log(infoUser)
        }

        }catch(error){
          setStore({
            error: error.message
          })
        }









      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      /* (data) => {
      fetch(`http://127.0.0.1:5000/api/login`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
      })
          .then((resp) => resp.json())
          .then((response) =>{console.log(response) 
            setStore({userData:response})})
          .catch((error) => console.error(error));
      }, */


    }
  };
};
