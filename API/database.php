<?php
// autorisation des requêtes HTTP
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// paramètrage de la connexion à la BDD
$host = 'localhost';
$dsn = 'mysql:host=localhost;dbname=bapaweb;charset=utf8';
$user = 'root';
$mdp = '456';

try {
  // On se connecte à la BDD mysql
  $db = new PDO($dsn, $user, $mdp);
  // Afficher le détail des erreurs, s'il y  en a:
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
  // En cas d'erreur, on affiche un message et on arrête tout
  die('Erreur : ' . $e->getMessage());
}