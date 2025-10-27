import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => {
      return {
        ...form,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
  try {
    //chiamata al server
    //Vai a chiedere i dati al server finto di DummyJSON
    //Richiesta HTTP
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST", //inviando dei dati
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form), //trasformo username e password in stringa, Perché il server accetta SOLO testo, non oggetti JavaScript.
    });

    // Se la risposta NON è ok → credenziali sbagliate o errore del server
    if (!response.ok) {
      // throw → lancia un errore + interrompe il codice e lo manda direttamente nel catch
      throw new Error("Internal server error");
    }

    // Converto la risposta del server (che è in JSON, quindi testo)
    // in un oggetto JavaScript utilizzabile (data).
    // Dentro "data" ci saranno tutti i dati del login
    // come: accessToken, refreshToken, username, id, email...
    const data = await response.json();

    //destructuring
    const { accessToken,refreshToken, ...user } = data;

    dispatch(login({ user, accessToken }));
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

return (
  <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <div>
          <input type="text" id="username" name="username" onChange={handleChange} />
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div>
          <input type="password" id="password" name="password" onChange={handleChange} />
        </div>
      </div>
      <button type="submit">Log in</button>
    </form>
  </>
);
};

export default Login