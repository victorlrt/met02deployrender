<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'dpg-ceuk0hg2i3ml690jjabg-a',
'driver' => 'pdo_pgsql',
'user' => 'met02_db_user',
'password' => 'ETMjsEaNYe2qiQOm0QNJyECxTrj3uWUs',
'dbname' => 'met02_db',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
