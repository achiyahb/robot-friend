import firebaseInstance from './index';


const db = firebaseInstance.firebase.database();

export default {
    writeData,
    deleteData,
    updateData,
    getData,
    pathFactory
}


// the good one
function getData(path) {
    return db.ref(path).once('value')
        .then(res => {
            return res.val();
        })
}

function updateData(data, path){
    db.ref(path).set(data);
}

function writeData(data, path) {
    return db.ref(path).push(data)
    .then(res => {
        console.log(res.key)
        return res.key
    })
}

function deleteData(path) {
    db.ref(path).set(null);
}


function pathFactory(i, self, id) {
    const user = firebaseInstance.firebase.auth().currentUser;
    const fullPath = ["users", user.uid, "courses", self.$route.params.cid,"chapters",self.$route.params.chaid,"questions",self.$route.params.qid]
    const pathArray = fullPath.splice(0,i+2)
    if (id){
        pathArray.push(id)
    }
    return pathArray.join('/')
}
