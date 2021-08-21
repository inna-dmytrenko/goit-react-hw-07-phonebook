import styled from '@emotion/styled/macro';

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;
export const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;
`;
export const Button = styled.button`
  background: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  margin-left: 18%;

  &:hover {
    background: #bf1650;
  }
`;
export const App = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
