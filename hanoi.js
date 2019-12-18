// Tower of Hanoi project by Garnetta Matthews-Lincoln & Diarte Jeffcoat


let choose = true;
let chosen;

const move = function (click) {
      let currentClick = click.currentTarget;
//       console.log(currentClick);
      if (choose){
           chosen = currentClick.lastElementChild;
           document.getElementById('holding').appendChild(chosen);
       //     console.log(chosen);
           choose = false;
      } 
      else if (!choose) {
           if (!currentClick.lastElementChild) {
                  currentClick.appendChild(chosen);
                  choose = true;
           } else if (Number(chosen.dataset.weight) < Number(currentClick.lastElementChild.dataset.weight)) {
                  currentClick.appendChild(chosen);
                  choose = true;
           }
      }

      if (document.getElementById('tower3').childElementCount === 4) {
          document.getElementById("ewa").style.visibility="visible"; 
      }
 }

document.getElementById('tower1').addEventListener('click', move);
document.getElementById('tower2').addEventListener('click', move);
document.getElementById('tower3').addEventListener('click', move);
