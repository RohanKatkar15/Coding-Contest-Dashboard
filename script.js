let p = fetch("https://kontests.net/api/v1/all")

p.then((value)=>
{
  return value.json()
}).then((contest)=>
{
  // console.log(contest);
  ihtml = ""
  for(let item in contest)
  {
    console.log(contest[item]);
    ihtml += `
    <div class="card" style="width: 22rem;">
      <img src="https://images7.alphacoders.com/122/1228014.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text">Status is ${contest[item].status}</p>
        <p class="card-text">In 24 Housrs? ${contest[item].in_24_hours}</p>
        <p>Starts at: ${contest[item].start_time}</p>
        <p>Ends   at: ${contest[item].end_time}</p>
        <a href="${contest[item].url}" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `
    cardContainer.innerHTML =  ihtml
  }
  
})