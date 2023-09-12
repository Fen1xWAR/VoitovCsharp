<html>
<body>
<h5>Go!</h5>
<?php
$n=0;
function rf($a) {
  global $n;   $s="";  $how= count($a);
  //echo "<li>-rec $n  how=$how <br>";
  if ($n > 20) return 0;

  for ($i=1; $i<=$n; $i++) 
             $s= $s . "&nbsp;";
  foreach($a as $key=>$value) {
     //if (is_array($value) && count($value) >0  ) {
     if (is_array($value)   ) {
         if (count($value) >0) 
                 rf($value); 
     }
     else {
         echo "$s";
         echo "$key => $value <br />";
     }
     $n+=2;
  }
}

$phones = array(
                "a"=>"1", 
                "k"=>array(
                    "b1"=>"2",
                    "b2"=>array(
                         "p" => "111", 
                         "q" => "222"                   
                    ),
                    "b3"=>"33"
                 ), 
                "c" => "3", 
                "d" => "4"
                );

echo "<br>======= <br>";
rf($phones);
echo "<br><br>******* <br>";
//rf($GLOBALS);


echo "<br>++++++++ <br>";
foreach($GLOBALS as $k=>$v) {
   $how= count($v);
   if ($how > 0) echo "$k => $v : how= $how <br />";

   if ( (count($v)> 0) && is_array($v)   ) {
       echo "<br>  ++++$k 2++++ <br>";
       foreach($v as $k2=>$v2) {
             $how= count($v2);
             echo "  $k2 => $v2 : how= $how <br />";
       }
   }
}


?>
</body>
</html>