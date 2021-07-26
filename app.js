const boutong = document.getElementById('cote_gauche');
 const btn = document.getElementById('clic');
    const colors = ["#003147","black", "red","green", "#003147"];
 
 btn.addEventListener('click', () => {
     for (let i = 0; i < colors.length; i++) {
         setTimeout(() => {
             boutong.style.backgroundColor = colors[i];
         }, 1000 * i + 1);
    
        }

 });
 /* fonction qui permet de changer de couleur toutes les 1 secondes avec une boucle */