<?php

include "head.php";

include "Nav.php";



$category = $_GET ["page"];
switch ($category) {
	case 'AmsterdamseBroodjes':
		include "AmsterdamseBroodjes.php";

	break;

	case 'WarmeBroodjes':
		include "WarmeBroodjes.php";

	break;

	case 'GezondeMaaltijdsalades':
		include "GezondeMaaltijdsalades.php";

	break;

	case 'Voorgerechten':
		include "Voorgerechten.php";

	break;

	case 'Hoofdgerechten':
		include "Hoofdgerechten.php";

	break;

	case 'WarmeBroodjesSpecial':
		include "WarmeBroodjesSpecial.php";

	break;
	case 'Handmatig':
		include "Handmatig.php";

	break;
    	
	default:
	include "AmsterdamseBroodjes.php";
		break;
}
include "Winkelmand.php";
include "footer.php";





?>