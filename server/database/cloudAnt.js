import cloudant from 'cloudant'


class CloudAntHandler{
    constructor(username,password){
        this.password=password;
        this.username=username;
        this.dbHanlder=cloudant({account:this.username,password:this.password})
        this.dbHanlder.db.list(function(err, allDbs) {
            console.log('All my databases: %s', allDbs.join(', '))
        });
    }

    test(){
        console.log('')
    }
    getArrivals(cb){
        let db = this.dbHanlder.db.use("arrivals");
        /*promise=db.list({include_docs:true})
        promise.next(function(data){
            console.log(data);
        })*/

        db.list({include_docs:true},function(err,data){
            //console.log(data)
            if (data) {
                cb(data);
                return data;
            }
            else {
                return err
            }
        })


        /*var promise = new Promise(function(resolve, reject) {
                console.log('here')
            db.list({include_docs:true},function(err,data){
                console.log(data)
                if (data) {
                    resolve("Stuff worked!");
                }
                else {
                    reject(Error("It broke"));
                }
            })

        });

        promise.then(function(result) {
            console.log(result); // "Stuff worked!"
        }, function(err) {
            console.log(err); // Error: "It broke"
        });*/

    }


}

export default CloudAntHandler