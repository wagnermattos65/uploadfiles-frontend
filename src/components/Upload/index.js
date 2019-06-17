import React, { Component } from 'react';

import DropZone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  renderDragMessage = ( isDragActive, isDragReject ) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste as imagens aqui...</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado.</UploadMessage>
    }

    return <UploadMessage type="success">Solte as imagens aqui...</UploadMessage>
  }

  render() {
    return (<DropZone accept="image/*" onDropAccepted={() => {}}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer 
          {...getRootProps()} 
          isDragActive={isDragActive} 
          isDragReject={isDragReject}>
            <input {...getInputProps()}/>
           {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
      )}
    </DropZone>
    );
  }
}
