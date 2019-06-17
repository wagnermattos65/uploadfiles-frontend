import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = () =>(
  <Container>
    <li>
    <FileInfo>
        <Preview src="https://wgnr8uploadfiles.s3.amazonaws.com/ba91512bde4cc2afcae790c01d0f6b7e-PORSCHE-911-Carrera-S--FT.jpg" />
        <div>
          <strong>arquivo.png</strong>
          <span>64kb <button onClick={() => {}}>Excluir</button></span>
        </div>
      </FileInfo>

      <div>
        <CircularProgressbar
          value={60}
          styles={{
            root: { width: 24 },
            path: { stroke: '#FA552F' }
          }}
          strokeWidth={10}
        />

        <a href="https://wgnr8uploadfiles.s3.amazonaws.com/ba91512bde4cc2afcae790c01d0f6b7e-PORSCHE-911-Carrera-S--FT.jpg"
        target="_blank"
        rel="noopener noreferrer">
          <MdLink style={{marginRight: 8}} size={24} color="#222" /> 
        </a>
        <MdCheckCircle size={24} color="#78e5d5" />
        <MdError size={24} color="#e57878" />
      </div>
    </li>
  </Container>
);

export default FileList;
