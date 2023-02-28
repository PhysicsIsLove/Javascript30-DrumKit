// practice reduce method of Arrays

const vehicles = ['car', 'bike', 'train', 'bike', 'train', 'scooter', 'plane', 'foot', 'plane', 'plane', 'bike'];
//get the count of every vehicle type

const ans = vehicles.reduce((count, item)=>{
    if(!count[item]){
        count[item] = 0;
    }
    count[item] += 1;
    return count; // remember to return the object 
}, {})

console.table(ans);

const people = [{"id":1,"first_name":"Raychel","last_name":"Perrottet","email":"rperrottet0@123-reg.co.uk","gender":"Female","ip_address":"137.49.245.31"},
{"id":2,"first_name":"Wilbert","last_name":"Winsborrow","email":"wwinsborrow1@gnu.org","gender":"Male","ip_address":"170.86.152.172"},
{"id":3,"first_name":"Woody","last_name":"Gaylord","email":"wgaylord2@intel.com","gender":"Agender","ip_address":"107.110.109.13"},
{"id":4,"first_name":"Chuck","last_name":"Duck","email":"cduck3@independent.co.uk","gender":"Male","ip_address":"40.135.4.58"},
{"id":5,"first_name":"Gerome","last_name":"Axelbey","email":"gaxelbey4@unblog.fr","gender":"Male","ip_address":"188.121.107.182"},
{"id":6,"first_name":"Jacquetta","last_name":"Leggatt","email":"jleggatt5@shinystat.com","gender":"Female","ip_address":"25.141.188.10"},
{"id":7,"first_name":"Isador","last_name":"Camber","email":"icamber6@reuters.com","gender":"Polygender","ip_address":"197.241.127.149"},
{"id":8,"first_name":"Gui","last_name":"Pickerin","email":"gpickerin7@bloomberg.com","gender":"Female","ip_address":"29.127.73.179"},
{"id":9,"first_name":"Gaby","last_name":"Skurray","email":"gskurray8@diigo.com","gender":"Male","ip_address":"224.110.228.195"},
{"id":10,"first_name":"Sydel","last_name":"Postles","email":"spostles9@mapy.cz","gender":"Female","ip_address":"233.150.140.196"}]

console.log("Before Sorting");
console.table(people);

const nameSorted = people.sort((name1, name2) => name1.first_name > name2.first_name ? 1 : -1);
console.log("After sorting it name wise");
console.table(nameSorted);