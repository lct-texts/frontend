import { Typography } from 'antd';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import './styles.css'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip);

export const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    pointRadius: 7
};


interface ISentimentChartData{
    data: {
        x: number,
        y: number,
        label: string,
        message_text: string
    }[];
    colors: any;
    title: string;
}


export const SentimentChart: React.FC<ISentimentChartData> = (props) => {
    
    var datasets = props.data.map((e) => {
        return {
            label: e.message_text,
            data: [{x: e.x, y: e.y}],
            backgroundColor: (props.colors as any)[e.label]
        }
    });
    const data = {
        datasets: datasets,
    };
    return <div style={{width: 550}} className='chart-data'>
        <Typography.Text strong={true}>{props.title}</Typography.Text>
        <Scatter options={options} data={data} />
        <div className='legend__container'>
            {Object.entries(props.colors).map((e: any) => {
                return <div className='legend__item'>
                    <div style={{background: e[1]}} className='legend__color'></div>
                    <Typography.Text>{e[0]}</Typography.Text>
            </div>
            })}
        </div>
    </div> ;
}
  