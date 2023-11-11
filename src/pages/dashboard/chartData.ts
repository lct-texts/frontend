import axios from 'axios';
import { ORIGIN, token } from '../../convig';


export const sentimentChartData = async () => {
    var res = await axios.get(ORIGIN+'sentimental-cords', {
        headers: {
            Authorization: 'Token ' + token
        }
    });

    return res.data;
}

export const stopWordsChartData = async () => {
    var res = await axios.get(ORIGIN+'stopwords-cords', {
        headers: {
            Authorization: 'Token ' + token
        }
    });

    return res.data;
}