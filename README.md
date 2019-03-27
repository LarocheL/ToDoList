## To DO List WebService

Dépot GIT pour la To Do List dans le cadre de la LP DIM





### Installation base de données

```


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";




CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



INSERT INTO `task` (`id`, `date`, `name`) VALUES
(1, '1999-01-20 20:00:00', 'aac');


ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

```
### Configuration

Pour lier la bdd 

- bdd -> bdd.php
