import React,{useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const fetchPost = () => {
    const fetchUrl = 'http://localhost:8080/'
    fetch(fetchUrl, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        password: password
      })
    })
  }
  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr></hr>
        <div className='uiform'>
          <div className='formField'>
            <label>ユーザ名</label>
            <input type="text" value={name} onChange={(e) =>handleNameChange(e)}placeholder="ユーザ名" name="usernmae"></input>
          </div>
        </div>
        <div className='uiform'>
          <div className='formField'>
            <label>パスワード</label>
            <input type="password" value={password} onChange={(e) =>handlePasswordChange(e)}placeholder="パスワード" ></input>
          </div>
          <button onClick={() => fetchPost()}>ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;