import React, { useCallback, useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import './styles.css';

interface Props {
  onLoad: (file: File) => void
}


const Dropzone: React.FC<Props> = ({onLoad}:any) => {

  const [fileSentURL, setFileSentURL] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileURL = URL.createObjectURL(file);
    setFileSentURL(fileURL);
    onLoad(file)
  }, [])
  
  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*',
  })

  useEffect(()=>{
    console.log(fileSentURL)
  },[fileSentURL])

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />
      {
        fileSentURL ?
        (<img src={fileSentURL} alt='Imagem Enviada' />)
        :
        (<p>Arraste um arquivo ou clique para selecionar</p>)
      }
    </div>
  )
}

export default Dropzone;