import React, { useState, useEffect } from 'react';
import Dropzone from '../../components/Dropzone';
import api from '../../services/api';


const Send: React.FC = () => {

  const [loadedFile, setLoadedFile] = useState<File>()

  useEffect(()=>{
    console.log(loadedFile)
  },[loadedFile])

  async function handleClick(){
    const data = new FormData()

    if(loadedFile)
      data.append('picture', loadedFile)

    await api.post('sendpic', data)

    alert('Enviado')

  }

  return <>
    <Dropzone onLoad={setLoadedFile} />
    <button onClick={handleClick}>Send File</button>
  </>;
}

export default Send;