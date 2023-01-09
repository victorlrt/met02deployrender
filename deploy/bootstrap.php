<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'dpg-ceu24j02i3mj6pk3efsg-a',
'driver' => 'pdo_pgsql',
'user' => 'met02db_user',
'password' => 'zO3y3HLIOqL0Edk6NkqGp9UbX7CAYL3T',
'dbname' => 'met02db',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
