export class ArrivalsApi()
{
    costructor()
    {

    }

    loadArrivals()
    {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static
    getAllCourses()
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }
}