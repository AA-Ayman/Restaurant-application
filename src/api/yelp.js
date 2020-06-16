import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer _n5-qT38rcytB9xlFbqV7tKWHv6d6aO5RqlJSWPntFKnakkj6v1J5xCbh64S3G5FQRRKcVkitU2SZs29HhI1LgytmEwVHRVCgp-Orr8WMfQAfffAiD32Hbf4UILAXnYx'
    }

}
); 

//yelp.get ('https://api.yelp.com/v3/businesses/search')