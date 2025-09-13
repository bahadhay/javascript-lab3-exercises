function add() {
     var num1=document.getElementById("one").value;
     var num2=document.getElementById("two").value;
     var somme=parseInt(num1)+parseInt(num2);
     
     document.getElementById("somme").innerHTML=somme;  
     
}

/*2)*/

function minute() {
     var a=document.getElementById("inputnumber1").value;
     var result=parseInt(a) * 60;
     document.getElementById("minuteresult").innerHTML=result ;
}

function heure() {
     var b=document.getElementById("inputnumber2").value;
     var result=parseInt(b)*3600;
     document.getElementById("heureresult").innerHTML=result;
}

function temp() {
     var h = document.getElementById("inputnumber3").value;
     var m = document.getElementById("inputnumber4").value;
     
     var result = parseInt(h) * 3600 + parseInt(m) * 60;
     document.getElementById("allresult").innerHTML = result;
}

/*3) */

function surface() {
     var base=document.getElementById("base").value;
     var hauteur=document.getElementById("hauteur").value;
     var surface=(parseInt(base)*parseInt(hauteur))/2;
     document.getElementById("surfaceresult").innerHTML=surface;
}


/* 4) */

function inverse() {
     var chaine=document.getElementById("chaine").value;
     var tableauCaracteres = chaine.split('');
     var tableauInverse = tableauCaracteres.reverse();
     var chaineInverse = tableauInverse.join('');
     document.getElementById("chaineinverse").innerHTML=chaineInverse;

     
}

/* 5)*/

function inverserTableau() {
     
     var chaineTableau = document.getElementById("tableau").value;
     var tableau = chaineTableau.split(',');
     var longueur = tableau.length;
     var moitie = Math.floor(longueur / 2);

     for (var i = 0; i < moitie; i++) {
       var temp = tableau[i];
       tableau[i] = tableau[longueur - 1 - i];
       tableau[longueur - 1 - i] = temp;
     }
   
     document.getElementById("invtableau").textContent = "Tableau inversé : [" + tableau.join(', ') + "]";
}

// 6)

function trouverPlusGrand() {
     // Récupérer les valeurs des champs de texte
     var nombre1 = parseInt(document.getElementById("nombre1").value);
     var nombre2 = parseInt(document.getElementById("nombre2").value);
     var nombre3 = parseInt(document.getElementById("nombre3").value);

     // Trouver le plus grand des trois
     var plusGrand = Math.max(nombre1, nombre2, nombre3);

     // Afficher le résultat
     document.getElementById("btplusgrand").textContent = "Le plus grand des trois entiers est : " + plusGrand;
   }

   //7 

   function calculerReste() {
     var nombre1 = document.getElementById("div1").value;
     var nombre2 = document.getElementById("div2").value;
     var reste = nombre1 % nombre2;

     document.getElementById("restediv").textContent = "Le reste de la division est : " + reste;
   }

   //8

   function verifierPairImpair() {
     // Récupérer la valeur du champ de texte avec l'ID "nombre"
     var nombre = parseInt(document.getElementById("input8").value);

     // Vérifier si l'entrée est un nombre valide
     if (isNaN(nombre)) {
       document.getElementById("resultat").textContent = "Veuillez entrer un nombre valide.";
       return;
     }

     // Vérifier si le nombre est pair ou impair
     var resultat = nombre % 2 === 0 ? 'pair' : 'impair';

     // Afficher le résultat
     document.getElementById("pairouimpair").textContent = "Le nombre est : " + resultat;
   }

   //9

   function formatPrs() {
     // Récupérer les propriétés de l'objet
     var nom = document.getElementById("Nom").value;
     var age = document.getElementById("Age").value;
     var adresse = document.getElementById("Adresse").value;

     // Construire la chaîne dans le format spécifié
     var resultat = nom + ' a ' + age + ' ans. Il habite à ' + adresse + '.';

     // Mettre à jour le contenu d'un élément HTML avec l'ID "resultat"
     document.getElementById("Generer").textContent = resultat;
   }



   // exercice 2
   function myFunction() {
     // Récupérer la valeur de l'input avec l'ID "numb"
     var number = document.getElementById("numb").value;

     // Vérifier si la valeur est un nombre entre 1 et 10
     if (Number.isInteger(parseFloat(number)) && number >= 1 && number <= 10) {
       document.getElementById("demo").textContent = "The number is valid.";
     } else {
       document.getElementById("demo").textContent = "Please enter a valid number between 1 and 10.";
     }
   }

   // exercice 3

   var nombreAleatoire;
    var compteur = 0;

    function genererNombre() {
      nombreAleatoire = Math.floor(Math.random() * 100) + 1;
      document.getElementById("instruction").textContent = "Type a number to compare to the generated one";
      document.getElementById("userInput").value = "";
      document.getElementById("resultatex3").textContent = "";
      document.getElementById("compteure3").textContent = "";
      compteur = 0;
    }

    function comparerNombres() {
      var userInput = parseInt(document.getElementById("userInput").value);
      compteur++;

      if (isNaN(userInput)) {
        document.getElementById("resultatex3").textContent = "Veuillez entrer un nombre valide.";
        return;
      }

      if (userInput === nombreAleatoire) {
        document.getElementById("resultatex3").textContent = "Bien joué ! Vous avez deviné le nombre " + nombreAleatoire + ".";
        document.getElementById("compteurex3").textContent = "Counts: " + compteur;
      } else if (userInput < nombreAleatoire) {
        document.getElementById("resultatex3").textContent = "Le nombre est plus grand.";
      } else {
        document.getElementById("resultatex3").textContent = "Le nombre est plus petit.";
      }
    }

