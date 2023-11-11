import { Comment } from '@ant-design/compatible';
import { Avatar, Divider } from 'antd';
import react from 'react';

interface IMessage {
    text: string;
}

export const UserMessage: react.FC<IMessage> = (props) => {
    return <>
        <Comment
            content={props.text}
            avatar={<Avatar>User</Avatar>}
        />
        <Divider style={{'margin': 0, 'padding': 0}}/>
    </> 
}

export const BotMessage: react.FC<IMessage> = (props) => {
    return <>
    <Comment
        content={props.text}
        avatar={<Avatar>Bot</Avatar>}
    />
    <Divider style={{'margin': 0, 'padding': 0}}/>
</> 
}