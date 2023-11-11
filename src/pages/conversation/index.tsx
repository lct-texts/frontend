import react from 'react';
import { Modal, Select, Checkbox, Slider } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { conversation } from './conversation';
import { UserMessage, BotMessage } from './message';
import './styles.css'


export const Conversation: react.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams<any>();
    const data = useQuery(['conversation', id], () => {
        return conversation(id as any);
    });
    return <Modal 
        open={true} 
        onCancel={() => {
            navigate('/')
        }}
        title={'Диалог №' + id}
        width={1200}
        footer={<></>}
        >
            {
                data.isLoading ?
                <div>loading</div> : 
                <div className='conversation__container'>
                    <Select 
                        defaultValue={data.data.sentiment}
                        options={[
                            {
                                'value': 'positive',
                                'label': 'positive'
                            },
                            {
                                'value': 'negative',
                                'label': 'negative'
                            },
                            {
                                'value': 'neutral',
                                'label': 'neutral'
                            }
                        ]}
                        style={{
                            'width': '100%'
                        }}
                    />
                    <Checkbox checked={data.data.can_promote}>Показывать контекстную рекламу</Checkbox>
                    <div className='msg-list__container'>
                        {
                            data.data.message_set.map((e: any) => {
                                return e.author == 'user' ? 
                                <UserMessage text={e.message}/> :
                                <BotMessage text={e.message}/>
                            })
                        }
                    </div>
                </div>
                
            }
        </Modal>
}