import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, ButtonContainer, Icons, User, ButtonContainer1 } from "./style";
import {Ionicons, AntDesign, MaterialCommunityIcons, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";




export default function Perfil() {
  return(
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>

          <ButtonContainer1>
            <Icons><AntDesign name="left" size={24} color="red"/></Icons>
            <User>UserName</User>
          </ButtonContainer1>  

          <ButtonContainer>
            <Icons><Ionicons name="chatbox-ellipses-outline" size={24}/></Icons>
            <Text>Chats</Text>
            <Icons><AntDesign name="right" size={14}/></Icons>
          </ButtonContainer>
          
          <ButtonContainer>
            <Icons><MaterialCommunityIcons name="message-text-outline" size={24} color="black" /></Icons>
            <Text right="65%">Pedidos</Text>
            <Icons><AntDesign name="right" size={14}/></Icons>
          </ButtonContainer>
        
          <ButtonContainer>
            <Icons><MaterialCommunityIcons name="puzzle-star-outline" size={24} color="black" /></Icons>
            <Text right="66%">Cupons</Text>
            <Icons><AntDesign name="right" size={14}/></Icons>
          </ButtonContainer>

          <ButtonContainer>
            <Icons><Ionicons name="md-card-outline" size={24} color="black" /></Icons>
            <Text right="58%">Pagamento</Text>
            <Icons><AntDesign name="right" size={14}/></Icons>
          </ButtonContainer>

          <ButtonContainer>
            <Icons><MaterialCommunityIcons name="card-account-details-star-outline" size={24} color="black" /></Icons>
            <Text right="60%">Fidelidade</Text>
            <Icons><AntDesign name="right" size={14}/></Icons>
          </ButtonContainer>

          <ButtonContainer>
            <Icons><MaterialCommunityIcons name="help-rhombus-outline" size={24} color="black" /></Icons>
            <Text>Ajuda</Text>
            <Icons><AntDesign name="right" size={14}/></Icons>
          </ButtonContainer>

          <ButtonContainer>
            <Icons><Ionicons name="file-tray-stacked-outline" size={24} color="black" /></Icons>
            <Text right="55%">Meus_dados</Text>
            <Icons><AntDesign name="right" size={14}/></Icons>
          </ButtonContainer>

          <ButtonContainer>
            <Icons><MaterialCommunityIcons name="security" size={24} color="black" /></Icons>
            <Text right="59%">Segurança</Text>
            <Icons><AntDesign name="right" size={14}/></Icons>
          </ButtonContainer>

          <ButtonContainer>
            <Icons><MaterialIcons name="exit-to-app" size={24} color="black" /></Icons>
            <Text right="74%">Sair</Text>
            <Icons><AntDesign name="right" size={14}/></Icons>
          </ButtonContainer>

      </SafeAreaView> 
    </>
  )
}