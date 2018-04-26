<?php

    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $company = $_POST['company'];
    // $mobile = $_POST['mobile'];
    // $website = $_POST['remark'];
    // $personal = $_POST['personal'];

    $burger  = "cheeseburger";
    $pizza   = "hawai pizza";
    $drank   = "cola";
    $snack   = "mars";
    $dessert = "dame blanche";
    $total    = "€12,50";


    $place    = "Amsterdam"; 
    $street   = "Het hoog";
    $number   = "3";
    $postcode = "1655GH";
    $mobile   = "0612345678";



$msg="";
if(isset($_POST['submit']))
{
    /* ****Important!****
    replace name@your-web-site.com below 
    with an email address that belongs to 
    the website where the script is uploaded.
    For example, if you are uploading this script to
    www.my-web-site.com, then an email like
    form@my-web-site.com is good.
    */

	$from_add = $email;

	$to_add = "joeysteffens1006@gmail.com"; //<-- put your yahoo/gmail email address here

	$subject = "Mail binnen van klant";

//    include 'emailstyle.css';

    $header = "<body style='background-color: white'><h1></h1>" . "<br><br>";




    $gebruiker = "<p>Beste ondernemer, (user information)</p>";

    $bedankt = "";

    $groet = "<p>Hartelijke  groet, Studio Westpoort</p></body>";

    $message =  $header         . 
    "Mail voor WestPoort Studio<br>"        .
    "Klant 7035 heeft het volgende besteld<br><br><br>" .
    "<br>Burgergerechten: <br>" . $burger   . "€2.50 <br>" . 
    "<br>Drankjes: <br>"        . $drank    . "€2.50 <br>" . 
    "<br>Snacks:<br>"           . $snack    . "€2.50 <br>" .
    "<br>Desserts:<br>"         . $dessert  . "€2.50 <br>" . 
    "<br>Tottale prijs: <br>"   . $total    . "<br>" .
    "<br><br><br>"                          . "<br>" . 
    "Plaats: <br>"              . $place    . "<br>" . 
    "<br>Straat: <br>"          . $street   . "<br>" . 
    "<br>Number: <br>"          . $number   . "<br>" .
    "<br>Postcode: <br>"        . $postcode . "<br>" .
    "<br>Mobile: <br>"          . $mobile;







	$headers = "From: $from_add \r\n";
	$headers .= "Reply-To: $from_add \r\n";
	$headers .= "Return-Path: $from_add\r\n";
	$headers .= "X-Mailer: PHP \r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	
	
	if(mail($to_add,$subject,$message,$headers))
	{
		$msg = "Mail sent OK";
	} 
	else 
	{
 	   $msg = "Error sending email!";
	}
	header('Location:../../../../../');
}
?>