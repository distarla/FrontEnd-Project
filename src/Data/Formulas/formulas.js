import moment from 'moment';

// Date conversion formulas        
const dateStringToPt = (date: String) => {
    return moment(new Date(date)).format("DD/MM/YYYY").toString()
}
const dateCalToString = (date: Object) => {
    return moment(new Date(date)).format("YYYY-MM-DD").toString()
}
export { dateStringToPt, dateCalToString };