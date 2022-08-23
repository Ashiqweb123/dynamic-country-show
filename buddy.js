const buddy=()=>
{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayBuddy(data))
}


const displayBuddy=friend=>
{
const friends=friend.results;
for(const friend of friends)
{
    console.log(friend)
    const divContainer=document.getElementById('buddy')
    const p=document.createElement('p')
    p.innerText=`Name:${friend.name.title} ${friend.name.first} ${friend.name.last} DOB: ${friend.dob.date}`
    divContainer.appendChild(p)
}
}