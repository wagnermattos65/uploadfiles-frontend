import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
  border-width: 5px;
  border-style: dashed;
`;

const dragReject = css`
  border-color: #e57878;
  border-width: 5px;
  border-style: dashed;
`;


export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  height: 250px;;
  
  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: '#999',
  error:'#E57878',
  success: '#78e5d5',
}
export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;
