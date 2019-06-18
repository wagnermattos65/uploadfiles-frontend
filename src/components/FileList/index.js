import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink, MdDeleteForever } from 'react-icons/md';

import { Container, FileInfo, Preview, UploadInfo } from './styles';

const FileList = ({ files, onDelete }) =>(
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
      <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>{uploadedFile.readbleSize}</span>
          </div>
        </FileInfo>

        <UploadInfo>
          {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                value={uploadedFile.progress}
                styles={{
                  root: { width: 24 },
                  path: { stroke: '#FA552F' }
                }}
                strokeWidth={10}
              />
            )}

            { !!uploadedFile.url && (<button onClick={() => onDelete(uploadedFile.id)}><MdDeleteForever size={24} color="#db0000" /></button>)}

            {uploadedFile.url && (
              <a href="https://wgnr8uploadfiles.s3.amazonaws.com/ba91512bde4cc2afcae790c01d0f6b7e-PORSCHE-911-Carrera-S--FT.jpg"
                target="_blank"
                rel="noopener noreferrer">
                <MdLink style={{marginRight: 8}} size={24} color="#222" /> 
              </a>

            )}

            { uploadedFile.uploaded && (<MdCheckCircle size={24} color="#78e5d5" />)}
            { uploadedFile.error && (<MdError size={24} color="#e57878" />)}


        </UploadInfo>
      </li>
    ))}
  </Container>
);

export default FileList;
