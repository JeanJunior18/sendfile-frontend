import React, { useState, useEffect } from 'react';
import Dropzone from '../../components/Dropzone';


const Send: React.FC = () => {

  const [loadedFile, setLoadedFile] = useState()

  useEffect(()=>{console.log(loadedFile)},[loadedFile])

  return <>
    <Dropzone onLoad={setLoadedFile} />
  </>;
}

export default Send;