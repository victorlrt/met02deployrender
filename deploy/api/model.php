<?php

//class client
class Client
{
    public $id;
    public $firstname;
    public $lastname;
    public $login;
    public $civility;
    public $phone;
    public $email;
    public $password;
    public $address;
    public $city;
    public $zipCode;
    public $country;

    public function setId($id)
    {
        $this->id = $id;
    }
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
    }
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }
    public function setLogin($login)
    {
        $this->login = $login;
    }
    public function setCivility($civility)
    {
        $this->civility = $civility;
    }
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }
    public function setEmail($email)
    {
        $this->email = $email;
    }
    public function setPassword($password)
    {
        $this->password = $password;
    }
    public function setAddress($address)
    {
        $this->address = $address;
    }
    public function setCity($city)
    {
        $this->city = $city;
    }
    public function setzipCode($zipCode)
    {
        $this->zipCode = $zipCode;
    }
    public function setCountry($country)
    {
        $this->country = $country;
    }
}

class Mushroom {
    public $id;
    public $name;
    public $edible;
    public $poisonous;
    public $img;
    public $description;
    public $toxicity;

    public function setId($id)
    {
        $this->id = $id;
    }
    public function setName($name)
    {
        $this->name = $name;
    }
    public function setEdible($edible)
    {
        $this->edible = $edible;
    }
    public function setPoisonous($poisonous)
    {
        $this->poisonous = $poisonous;
    }
    public function setImg($img)
    {
        $this->img = $img;
    }
    public function setDescription($description)
    {
        $this->description = $description;
    }
    public function setToxicity($toxicity)
    {
        $this->toxicity = $toxicity;
    }
}