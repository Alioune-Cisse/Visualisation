window.onload=init;
function init(){
    var bouton1=document.getElementById("bouton1");
	bouton1.onclick=calculerSalaire; 
}
//ce code en dessous permet d'afficher ou de masquer les heures supplémentaires

function afficher(){
		document.getElementById("masked").style.display = "block";
	}

function masquer(){
		document.getElementById("masked").style.display = "none";
	}


//ce code en dessous permet de récupérer les informations sur l'employé

function calculerSalaire(){
	var nom = document.getElementById("nom").value;
	var categorie = document.getElementById("categorie").value;
	var nbHeure = parseInt(document.getElementById("nbHeure").value);
	var heureSup = parseInt(document.getElementById("heureSup").value);
	var avantage = parseInt(document.getElementById("avantage").value);
	var rep = document.getElementById("oui").value;
	var repo = document.getElementById("non").value;
	var salaire; 
	var ras;
	var salaireNet;
	var tauxImpot;
	var tauxHoraire;
	var salaireBase;
	var categorieA;
	var categorieB;
	var categorieC;
	var heure45;
	var HS45;
	var HS;
	var heure30;
	


	// ci dessous le code pour calculer le salaire de base selon la catégorie

	if(categorie == "categorieA"){
		tauxHoraire = 10000;
		tauxImpot = 0.1;
		}
	
	if(categorie == "categorieB"){
		tauxHoraire = 7500;
		tauxImpot = 0.075;
		}
	if(categorie == "categorieC"){
		tauxHoraire = 5000;
		tauxImpot = 0.05;
		}


// Ci dessous le code pour calculer le salaire selon les heures sup et les avantages

	if(heureSup < 5){
		HS = heureSup * tauxHoraire * 1.3; 

	}
		
	if(heureSup > 5){
		heure30 = tauxHoraire * 1.3 * 5; 
		heure45 =  heureSup - 5; 
		HS45 = heure45 * tauxHoraire * 1.45;  
		HS = heure30 + HS45;

	}
		

	salaireBase = nbHeure * tauxHoraire;

	salaire = salaireBase +  avantage + HS;

	ras = salaire * tauxImpot;

	salaireNet = salaire - ras;

	


	//ce code en dessous permet d'insérer les textes dans le tableau

	var tableau = document.getElementById("enregistrement");
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	td.innerHTML = nom;
	tr.appendChild(td);
	td = document.createElement("td");
	td.innerHTML = salaire;
	tr.appendChild(td);
	td = document.createElement("td");
	td.innerHTML = ras;
	tr.appendChild(td);
	td = document.createElement("td");
	td.innerHTML = salaireNet;
	tr.appendChild(td);
	tableau.appendChild(tr);
	
}
	



