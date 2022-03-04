export const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "http://127.0.0.1:5000/",
      user: [],
    },
    actions: {
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
    },
        login: () => {
        fetch(`http://127.0.0.1:5000/api/register`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(),
        })
            .then((resp) => resp.json())
            .then((response) => console.log(response))
            .catch((error) => console.error(error));
    },
  };
};
