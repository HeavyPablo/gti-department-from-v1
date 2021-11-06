import axios from "axios";
import moment from "moment";

const URL = '/admservices'

var headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('user-token')
};

class AdmService {
    static get(params, then) {
        axios.get(URL, {params: params, headers: headers}).then(({data}) => {
            let elements = [];

            data.forEach(element => {
                element.from_date = moment(element.from_date).format('DD/MM/YYYY');
                element.to_date = moment(element.to_date).format('DD/MM/YYYY');
                elements.push(element);
            }); 

            then(elements);
        })
    }

    static pluck(params, then) {
        axios.get(URL, {params: params, headers: headers}).then(({data}) => {
            let elements = [];

            data.forEach(element => {
                elements.push({ value: element.id, text: element.name });
            });

            then(elements);
        })
    }

    static show(element, then) {
        axios.get(URL + '/' + element, {headers: headers})
        .then(({data}) => then(data));
    }

    static store(data, then, error) {
        axios.post(URL, data, {headers: headers})
        .then(({data}) => then(data))
        .catch(({response}) => error(response));
    }

    static update(element, data, then, error) {
        axios.put(URL + '/' + element, data, {headers: headers})
        .then(({data}) => then(data))
        .catch(({response}) => error(response));
    }

    static destroy(element, then) {
        axios.delete(URL + '/' + element, {headers: headers})
        .then(({data}) => then(data));
    }
}

export default AdmService;
