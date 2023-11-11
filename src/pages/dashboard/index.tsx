import react from 'react';
import { Table, Typography } from 'antd';
import {columns} from './columns';
import { useQuery } from 'react-query';
import { conversations } from './conversations';
import { Outlet } from 'react-router-dom';
import { SentimentChart } from './sentimentChart';

import './styles.css'
import { sentimentChartData, stopWordsChartData } from './chartData';


export const Dashboard: react.FC = () => {
    const [page, setPage] = react.useState(0);
    const dataSource = useQuery({queryFn: () => conversations(page), queryKey: ['conversations', page]});
    const sentimentCharDataSource = useQuery('sentiment-cords', sentimentChartData)
    const stopwordsCharDataSource = useQuery('stopwords-cords', stopWordsChartData)


    if (dataSource.isLoading || sentimentCharDataSource.isLoading || stopwordsCharDataSource.isLoading) {
        return <div>loading</div>
    }
    return <div className='centered'>
        <div className='dashboard__container'>
            <Typography.Title>
                Информация о взаимодействиях с ботом
            </Typography.Title>
            <div className="chart__container">
                <SentimentChart
                    data={sentimentCharDataSource.data}
                    colors={{
                        'neutral': 'rgba(54, 162, 235, 1)',
                        'negative': 'rgba(255, 99, 132, 1)',
                        'positive': 'rgba(75, 192, 192, 1)'
                    }}
                    title='График распределения переписок по эмоциональному признаку'
                />
                <SentimentChart
                    data={stopwordsCharDataSource.data}
                    colors={{
                        'вопрос клиента связанный с отказом от использования продуктов банка': 'rgba(54, 162, 235, 1)',
                        'жалобы': 'rgba(255, 99, 132, 1)',
                        'просроченная задолженность': 'rgba(75, 192, 192, 1)',
                        'мошенничество, утеря/кража карты': 'rgba(255, 159, 64, 1)'
                    }}
                    title='График распределения негативных сообщений по стоп темам'
                />
            </div>
            <Table
                columns={columns} 
                dataSource={dataSource.data?.records}
                pagination={{
                    defaultCurrent: page+1,
                    onChange: (pageNumber: number) => {
                        setPage(pageNumber-1)
                    },
                    pageSize: 10,
                    total: dataSource.data?.total
                }}
            ></Table>
            <Outlet />
        </div> 
    </div> 
}