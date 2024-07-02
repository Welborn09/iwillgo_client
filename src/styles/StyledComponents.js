import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



/* Signup Page */
export const SignUpContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #007bff;
  color: #fff;
`;

export const SignUpTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  width: 300px;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  width: 320px;
`;

export const SignUpButton = styled.button`
  background: #fff;
  color: #007bff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e0e0e0;
  }
`;
