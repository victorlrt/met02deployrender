<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../bootstrap.php';
require_once __DIR__ . '/model.php';
 

$app = AppFactory::create();
$app->addErrorMiddleware(true, true, true);
const JWT_SECRET = "makey1234567";

function createJwT (Response $response, $login, $password) : Response {

    $issuedAt = time();
    $expirationTime = $issuedAt + 700;
    $payload = array(
    'login' => $login,
    'password' => $password,
    'iat' => $issuedAt,
    'exp' => $expirationTime
    );

    $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    return $response;
}

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/api/hello","/api/login","/api/client","/api/catalogue", "/api/client"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
];

function  addHeaders (Response $response) : Response {
    $response = $response
    ->withHeader("Content-Type", "application/json")
    ->withHeader('Access-Control-Allow-Origin', ('https://met02web.onrender.com'))
    ->withHeader('Access-Control-Allow-Headers', 'Content-Type,  Authorization')
    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    ->withHeader('Access-Control-Expose-Headers', 'Authorization');

    return $response;
}


// $app->get('/api/clients', function (Request $request, Response $response, $args) {   
//     $response->getBody()->write(json_encode($response));

//     return $response;
// });



//APi d'authentification générant un JWT
// $app->post('/api/login', function (Request $request, Response $response, $args) {   
//     $err=false;
//     $inputJSON = file_get_contents('php://input');
//     $body = json_decode( $inputJSON, TRUE ); //convert JSON into array

//     $login = $body ['login'] ?? "";
//     $password = $body ['password'] ?? "";

//     if (!preg_match("/[a-zA-Z0-9]{1,20}/",$login))   {
//         $err = true;
//     }
//     if (!preg_match("/[a-zA-Z0-9]{1,20}/",$password))  {
//         $err=true;
//     }

//     global $entityManager;
//     $user = $entityManager->getRepository('Client')->findOneBy(array('login' => $login, 'password' => $password));


//     if (!$err && $user) {
//             $response = createJwT ($response, $login, $password);
//             $response = addHeaders($response);
//             $data = array('login' => $login);
//             $response->getBody()->write(json_encode($data));
//      } else {          
//             $response = $response->withStatus(401);
//      }
//     return $response;
// });

$app->get('/api/client', function (Request $request, Response $response, $args) {
    global $entityManager;
    $client = $entityManager->getRepository('client')->findAll();
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($client));
    return $response;
});

$app->get('/api/catalogue', function (Request $request, Response $response, $args) {
    global $entityManager;
    $mushroom = $entityManager->getRepository('mushroom')->findAll();
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($mushroom));
    return $response;
});


// $app->post('/api/client', function (Request $request, Response $response, $args) {
//     $inputJSON = file_get_contents('php://input');
//     $body = json_decode( $inputJSON, TRUE ); //convert JSON into array
//     $lastName = $body ['lastName'] ?? ""; 
//     $firstName = $body ['firstName'] ?? "";
//     $zipcode= $body ['zipcode'] ?? "";
//     $tel = $body ['tel'] ?? "";
//     $email = $body ['email'] ?? "";
//     $gender = $body ['gender'] ?? "";
//     $login = $body ['login'] ?? "";
//     $password = $body ['password'] ?? "";
//     $err=false;


//     if (!$err) {
//         global $entityManager;

//         $entityManager->persist($client);
//         $entityManager->flush();
//         $response = addHeaders($response);
//         $response->getBody()->write(json_encode ($client));
//     }
//     else{          
//         $response = $response->withStatus(401);
//     }
//     return $response;
// });

$app->post('/api/client', function (Request $request, Response $response, $args) {
    //$inputJSON = file_get_contents('php://input');
    //$body = json_decode( $inputJSON, TRUE ); //convert JSON into array
    //$id = $body ['id'] ?? ""; 
    $body = $request->getParsedBody();

    $lastName = $body['lastName'] ; 
    $firstName = $body['firstName'] ;
    $zipcode= $body['zipcode'] ;
    $tel = $body['tel'] ;
    $email = $body['email'] ;
    $gender = $body['gender'] ;
    $login = $body['login'] ;
    $password = $body['password'] ;
    $err=false;

    var_dump("body ", $body);

    var_dump("firstName ", $body["firstName"]);

    if ($err == false) {
        global $entityManager;
        $client = new Client;
        //$client->setId($id);
        $client->setLastName($lastName);
        $client->setFirstName($firstName);
        $client->setZipcode($zipcode);
        $client->setTel($tel);
        $client->setEmail($email);
        $client->setGender($gender);
        $client->setLogin($login);
        $client->setPassword($password);
        var_dump("client ", $client);

        $entityManager->persist($client);
        $entityManager->flush();
        $response = addHeaders($response);
        $response->getBody()->write(json_encode ($client));
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});


$app->add(new Tuupola\Middleware\JwtAuthentication($options));
// $app->add(new Tuupola\Middleware\CorsMiddleware([
//     "origin" => ["*"],
//     "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     "headers.allow" => ["Authorization", "Content-Type"],
//     "headers.expose" => ["Authorization"],
//     "headers.origin" => ["*"],
// ]));
$app->run ();