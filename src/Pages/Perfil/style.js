import styled from "styled-components/native";
import styled1 from "styled-components";

export const SafeAreaView = styled.SafeAreaView`
  

  display:flex;
  
  

`;

export const User = styled.View`
  
  margin-left: 30%;
`

export const ButtonContainer1 = styled.View`
  flex-direction: row;
  
  
  width; 100%;
  padding: 10px 20px 20px 20px;
  
  
`


export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: start;
  
  width; 100%;
  padding: 10px 20px 20px 20px;
  font-size: 18px;
  
`

export const Icons = styled.View`

  margin-right: 25px;
 
  
`

export const Text = styled.Text`

  margin-right: ${props => props.right || "70%"};
  font-size: 18px;
  

`

