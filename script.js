const api_url =
  "https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&&paged=1";
async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  const legu = data.response.items[0].title;
  const team1 = data.response.items[0].teama.name;
  const team2 = data.response.items[0].teamb.name;
  const player1 = data.response.items[0].teamb.name;
  const Player2 = data.response.items[0].teamb.name;
  document.getElementById("matchTitle").textContent = legu;
  document.getElementById("t1Name").textContent = team1;
  document.getElementById("t2Name").textContent = team2;
}
getISS();

const next_api =
  "https://rest.entitysport.com/v2/competitions/111297/squads/?token=ec471071441bb2ac538a0ff901abd249";
async function getIPP() 
{
  const response1 = await fetch(next_api);
  const data1 = await response1.json();
  console.log(data1);
  for (let i = 0; i < 16; i++) 
  {
    let data = [data1.response.squads[0].players[i].title];
    let list = document.getElementById("myList");
    data.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
    
 }
  for (let i = 0; i < 16; i++) 
  {
    let data = [data1.response.squads[4].players[i].title];
    let list = document.getElementById("myList1");
    data.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
    
 }
}
getIPP();
function tDetail() {
  var x = document.getElementById("sTeam");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
