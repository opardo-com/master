<?php 
function format_phone($phone)
{
	$phone = preg_replace("/[^0-9]/","",$phone);
	$phone_1 = substr($phone, -10);
	$phone_2 = substr($phone, -11,1);
	if(strlen($phone)==10)
    	return preg_replace('/\d{3}/', '$0.', str_replace('.', null, trim($phone_1)), 2);
    else
    	return $phone_2.'.'.preg_replace('/\d{3}/', '$0.', str_replace('.', null, trim($phone_1)), 2);

}


$phone	=		$_POST['phone'];
$name	=		$_POST['name'];

$subject = 		'Quote Request';
$from =			'quotes@arenaagency.com';

$response->text = 0;
if(isset($_POST['name'])&&isset($_POST['phone']))
{
	if (strlen(preg_replace("/[^0-9]/","",$phone)) != 10 && strlen(preg_replace("/[^0-9]/","",$phone)) != 11)
	{
		$response .= ' - please use a valid phone number';
	}
	else
	{
		$body = '
						<html>
							<head>
								<title>'.$subject.'</title>
							</head>
							<body>
								<table>
									<tr>
										<td style="width:100px;"></td>
										<td style="width:100px;"></td>
										<td style="width:100px;"></td>
										<td style="width:100px;"></td>
										<td style="width:100px;"></td>
										<td style="width:100px;"></td>
										<td style="width:100px;"></td>
										<td style="width:100px;"></td>
										<td style="width:100px;"></td>
										<td style="width:100px;"></td>
									</tr>
									<tr>
										<td colspan="10">A customer has requested information for a quote:</td>
									</tr>
									<tr>
										<td colspan="10">Type: '.$select.'</td>
									</tr>
									<tr>
										<td colspan="10">Contact Phone: '.format_phone($phone).'</td>
									</tr>
								</table>
							</body>
						</html>
		';
		$headers  = "From: $from\r\n"; 
		$headers .= "Content-type: text/html\r\n";
		if(mail($from, $subject, $body, $headers))
			$response->text = 2;
	}
}
else
{
	$response->text = 1;
}
$response = json_encode($response);

echo $response;

?>