import { Tag } from "antd"
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

var sentimentColorMapping = {
    'positive': 'green',
    'neutral': 'grey',
    'negative': 'red'
}
var promoteMapping = {
    'Нет': 'red',
    'Да': 'green'
}

export const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (e: string) => <Link to={'/conversation/'+e}>
            <Typography.Link>
                {e}
            </Typography.Link>
        </Link>
    },
    {
        title: 'Первое сообщение',
        dataIndex: 'message',
        key: 'message',
        render: (e: string) => <div>{e.substring(0, 50)}</div>
    },
    {
        title: 'Показывать контекстную рекламу',
        dataIndex: 'can_promote',
        key: 'can_promote',
        render: (e: string) => <Tag color={(promoteMapping as any)[e]}>{e}</Tag>
    },
    {
        title: 'Тип переписки',
        dataIndex: 'sentiment',
        key: 'sentiment',
        render: (e: string) => <Tag color={(sentimentColorMapping as any)[e]}>{e}</Tag>
    },
    {
        title: 'Оценка переписки',
        dataIndex: 'sentiment_score',
        key: 'sentiment_score',
        render: (e: string) => <Tag color={parseFloat(e) < 0 ? 'red' : 'green'} bordered={false}>{e}</Tag>
    },
    {
        title: 'Стоп темы',
        dataIndex: 'stop_theme',
        key: 'stop_theme'
    }
]