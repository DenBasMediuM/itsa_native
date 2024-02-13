import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import Group from './components/Group';

export default function App() {
  return (
    <Container>
    <ScrollView>
      <Group 
      title='Новые заказы'
      items={[
        {
          data: '15:15',
          problem: 'sdfsdfdsf',
          inwork: true,
          user: {
            name: 'Денис Исаев',
            foto: 'https://itprofi.in.ua/wp-content/uploads/2023/04/logo.png'
          }
        },
        {
          data: '15:15',
          problem: 'sdfsdfdsf',
          user: {
            name: 'Денис Исаев',
            foto: 'https://itprofi.in.ua/wp-content/uploads/2023/04/logo.png'
          }
        },
        {
          data: '15:15',
          problem: 'sdfsdfdsf',
          user: {
            name: 'Денис Исаев',
            foto: 'https://itprofi.in.ua/wp-content/uploads/2023/04/logo.png'
          }
        },
        {
          data: '15:15',
          problem: 'sdfsdfdsf',
          user: {
            name: 'Денис Исаев',
            foto: 'https://itprofi.in.ua/wp-content/uploads/2023/04/logo.png'
          }
        }
      ]}
      ></Group>
      <Group 
      title='Ваши заказы'
      items={[
        {
          data: '15:15',
          problem: 'sdfsdfdsf',
          user: {
            name: 'Денис Исаев',
            foto: 'https://itprofi.in.ua/wp-content/uploads/2023/04/logo.png'
          }
        },
        {
          data: '15:15',
          problem: 'sdfsdfdsf',
          user: {
            name: 'Денис Исаев',
            foto: 'https://itprofi.in.ua/wp-content/uploads/2023/04/logo.png'
          }
        },
        {
          data: '15:15',
          problem: 'sdfsdfdsf',
          user: {
            name: 'Денис Исаев',
            foto: 'https://itprofi.in.ua/wp-content/uploads/2023/04/logo.png'
          }
        },
        {
          data: '15:15',
          problem: 'sdfsdfdsf',
          user: {
            name: 'Денис Исаев',
            foto: 'https://itprofi.in.ua/wp-content/uploads/2023/04/logo.png'
          }
        }
      ]}
      ></Group>
      
    </ScrollView>
    <PlusButton style={{
      shadowColor: '#2A86FF',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 2.5,
      elevation: 5
    }}>
      <Ionicons name='add' size={36} color="white" />
    </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  position: absolute;
  right: 15px;
  bottom: 25px;
`;


const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;