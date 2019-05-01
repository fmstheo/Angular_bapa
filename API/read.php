<?php

require 'database.php';

$personnel = [];
$sql = "SELECT * FROM personnel";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $personnel[$i]['idPersonnel']    = $row['idPersonnel'];
    $personnel[$i]['telP'] = $row['telP'];
    $personnel[$i]['nomP'] = $row['nomP'];
    $personnel[$i]['prenomP'] = $row['prenomP'];
    $personnel[$i]['postePrincipalP'] = $row['postePrincipalP'];
    $personnel[$i]['loginP'] = $row['loginP'];
    $personnel[$i]['mdpP'] = $row['mdpP'];
    $personnel[$i]['idService'] = $row['idService'];
    $personnel[$i]['email'] = $row['email'];
    $personnel[$i]['matricule'] = $row['matricule'];
    $personnel[$i]['idManager'] = $row['idManager'];
    $personnel[$i]['actif'] = $row['actif'];
    $i++;
  }

  echo json_encode($personnel);
}
else
{
  http_response_code(404);
}