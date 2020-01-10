import axios from 'axios';

export default axios.create({
    baseURL: `https://api.yelp.com/v3/businesses`,
    headers: {
        Authorization: 'Bearer jJnWCkshQTh91D2_yfqzD-XOexD2B_Ni4MjOdf24NQ2gXdrdGGEZWpHHYdzFUX-_ykyqG-7YCmiTAU9IF-QkUZStAnrXm-wXeQB1SB-99VpuazESIV0v0E5IZeEWXnYx'
    }
});
