<?php
    require("bdd/bdd.php");
    if(isset($_GET['action'])){
      if($_GET['action'] == "add")
      {
        $req = "INSERT INTO task (date, name) VALUES (:date, :tache)";
        $prep=$bdd->prepare($req);
        $prep->bindValue(':date', $_GET['date']);
        $prep->bindValue(':tache', $_GET['tache']);
        $prep->execute();
        echo json_encode("success");
      }
      else if($_GET['action'] == "remove")
      {
        $req = "DELETE FROM task WHERE id = :id";
        $prep=$bdd->prepare($req);
        $prep->bindValue(':id', $_GET['id']);
        $prep->execute();
        echo json_encode("success");
      }
      else if($_GET['action'] == "getTaskId"){
        $id = htmlspecialchars($_GET['id']);
        $req = "SELECT * FROM task WHERE id = :id";
        $prep=$bdd->prepare($req);
        $prep->bindValue(':id', $id);
        $prep->execute();
        $return = $prep->fetchAll();
        echo json_encode($return);
      }
      else if($_GET['action'] == "update")
      {
        $req = "UPDATE task SET date = :date, name = :tache WHERE id = :id";
        $prep=$bdd->prepare($req);
        $prep->bindValue(':date', $_GET['date']);
        $prep->bindValue(':tache', $_GET['tache']);
        $prep->bindValue(':id', $_GET['id']);
        $prep->execute();
        echo json_encode("success");
      }
    }
    else
    {
      $req = "SELECT * FROM task";
      $prep=$bdd->prepare($req);
      $prep->execute();
      $prep = $prep->fetchAll();
      echo json_encode($prep);
    }
?>