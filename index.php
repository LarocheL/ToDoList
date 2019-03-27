<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Todo-List</title>

    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>

  <body>
    <h1>Ma belle TODO list</h1>
    
    <input type="datetime-local" id="date" name="date">
    <img src="img/calendar.png">
    <input type="text" size="40" id="tache" name="tache" placeholder="Tâche...">
    <input type="button" id="add" value="Ajouter la tâche">

    <table id="table"></table>

    <div id="updModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>Modifier une tâche</h2>
        </div>
        <div class="modal-body">
          <label for="updTask">Tâche :</label>
          <input type="text" id="updTask">
          <label for="updDate">Date :</label>
          <input type="datetime-local" id="updDate">
        </div>
        <div class="modal-footer">
          <input type="button" id="envUpd" value="Modifier la tâche">
          <input type="button" id ="canUpd" value="Annuler la modification">
        </div>
      </div>
    </div>

    <div id="delModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>Supprimer une tâche</h2>
        </div>
        <div class="modal-body">
            Voulez-vous supprimer cette tâche ?
        </div>
        <div class="modal-footer">
          <input type="button" id="envSup" value="Supprimer la tâche">
          <input type="button" id ="canSup" value="Annuler la suppression">
        </div>
      </div>
    </div>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>