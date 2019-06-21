import React, { Component } from 'react';

import DropZone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  renderDragMessage = ( isDragActive, isDragReject ) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste as imagens ou clique aqui para escolher os arquivos...(Tamanho máximo: 2 Megabites)</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado.</UploadMessage>
    }

    return <UploadMessage type="success">Solte as imagens aqui...</UploadMessage>
  }

  render() {
    const { onUpload } = this.props;

    return (<DropZone accept="image/*" onDropAccepted={onUpload}>
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
