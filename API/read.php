<?php

require 'database.php';

// requête
$sql = "SELECT * FROM personnel";

// récupération de la table 'personnel'
$result = $db->query($sql)->fetchAll();

// création tableau vide
$personnel = array();

// on parcourt les lignes retournées
foreach ($result as $employe) {
  // cré d'un tableau vide à chaque occurence de ligne
  $infoPersonnel = array();

  // on parcourt chaque infos de la ligne
  foreach ($employe as $key => $value) {
    // le retour étant de type 'clé->'value' + 'index->value' , on ne garde que 'clé->value'
    if (!is_int($key)) {
      $infoPersonnel[$key] = $value;
    }
  }
  $personnel[] = $infoPersonnel;
}

echo json_encode($personnel);
