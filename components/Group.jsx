import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

const Group = ({ title, items }) => {
    return (
        <GroupBlock>
        <GroupTitle>{title}</GroupTitle>
        {items.map( (item, index) => (
                <GroupItem key={index}>
                <Foto source={{ uri: item.user.foto }} />
                <View style={{flex:1}}>
                    <ClientName>{item.user.name}</ClientName>
                    <Problem>{item.problem}</Problem>
                </View>
                <GroupDate inwork={item.inwork}>{item.data}</GroupDate>
                </GroupItem>
            )
        )}    
        </GroupBlock>
    );
};

Group.defaultProps = {
    groupTitle: 'Untitled',
    items: []
}

const GroupDate = styled.Text`
  background: ${props => (props.inwork ? '#2A86FF' : '#E9F5FF')};
  color: ${props => (props.inwork ? '#fff' : '#4294ff')};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 32px;
`;

const Problem = styled.Text``;

const ClientName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const GroupBlock = styled.View`
  padding: 0 20px;
  margin-bottom: 25px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px 0px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

const Foto = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 40px;
  margin-right: 20px;
`;

export default Group;