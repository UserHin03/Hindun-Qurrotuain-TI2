// menangkap elemen a
document.querySelectorAll('#option a').forEach((anchor)=>{
   anchor.onclick = (element)=> {
    computerChoice(element);
   }

});

function computerChoice(element){
    //menangkap elemen piliihan komputer
    let pilihanKomputer = document.querySelector('#result');
    
    //menangkap elemen pilihan user
    let pilihanUser = element.target.innerText;

    //mebuat sebuah array untuk pilihan komputer
    let choices =['Rock','Paper','Scissors'];

    //membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML =choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    //pilihan jika pilihan draw atau seri
    if (pilihanUser==pilihanKomputer){
        alert('Draw')
    }
    //pilihan jika user menang
   if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
    // alert('You WIN');
    setTimeout(() => alert('You Win'), 10000)
   }else if(pilihanUser == 'Paper'&& pilihanKomputer == 'Rock'){
    setTimeout(() => alert('You Win'), 10000)
   }else if(pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
    setTimeout(() => alert('You Win'), 10000)
   }
   //pilihan jika user menang
   if (pilihanUser == 'Scissors' && pilihanKomputer == 'Rock'){
    setTimeout(() => alert('You Win'), 10000)
   }else if(pilihanUser == 'Rock'&& pilihanKomputer == 'Paper'){
    setTimeout(() => alert('You Win'), 10000)
   }else if(pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
    setTimeout(() => alert('You Win'), 10000)
   }
}

