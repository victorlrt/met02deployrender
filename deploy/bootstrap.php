<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'dpg-cdr2p6la4991vasbv3o0-a',
'driver' => 'pdo_pgsql',
'user' => 'met02web_user',
'password' => '5hYqdIzo8HVfqLXAfhBjatk7L9k5M8Nw',
'dbname' => 'met02web',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
