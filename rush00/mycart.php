<?php
	session_start();
	$curr_usr  = $_SESSION['loggued_on_user'];
	$user_cart = unserialize(file_get_contents("../private/$curr_usr"));
	$verf_item = unserialize(file_get_contents("../private/item"));
?>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Ebabe</title>
		<link rel="stylesheet" href="index.css">
		<style>
			h2 {
				font-size: 28px;
				text-decoration: underline;
			}
		</style>
	</head>
	<body>
		<div class="header_row">
			<div class="dropdown"><a href="index.php"><button class="homebtn"><h1>Home</h1></button></a></div>
			<div class="dropdown">
				<button class="dropbtn">MEN</button>
				<div class="dropdown-menu">
					<a href="#">SHOES</a>
					<a href="#">CLOTHIG</a>
					<a href="#">ACCESSORIES</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">WOMEN</button>
				<div class="dropdown-menu">
					<a href="#">SHOES</a>
					<a href="#">CLOTHIG</a>
					<a href="#">ACCESSORIES</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">KIDS</button>
				<div class="dropdown-menu">
					<a href="#">SHOES</a>
					<a href="#">CLOTHIG</a>
					<a href="#">ACCESSORIES</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">SPORTS</button>
				<div class="dropdown-menu">
					<a href="#">SHOES</a>
					<a href="#">CLOTHIG</a>
					<a href="#">ACCESSORIES</a>
				</div>
			</div>
			<div class="logged">
				<button class="dropbtn"><?php echo $_SESSION['loggued_on_user']?></button>
				<div class="dropdown-log">
					<a href="acc_info.php">Account Info</a>
					<a href="mycart.php">My Cart</a>
					<?php
						require_once("auth.php");
						if (ad_auth($_SESSION['loggued_on_user']))
						{
							?>
							<a href="enter_product.php">Add Products</a>
							<?php
						}
					?>
					<a href="logout.php"><b>Logout</b></a>
				</div>
			</div>
		</div>
		<div class="acc_info">
			<h2>My Cart</h2><br />
			<b><?php echo $_SESSION['loggued_on_user']?></b>'s SHOPPING CART:<br /><br>
			<?php
			if ($user_cart){
				?>
					Items:<br /><hr style="border: 1px dashed black"><br>

				<?php
				foreach ($user_cart as $k=>$v) {
					$printed = FALSE;
					foreach ($verf_item as $a=>$b) {
						if ($v['name'] === $b['name']) {
							$printed = TRUE;
				?>
				<div>
					<?php
					echo $v['name'].": $".$v['price']." * ".$v['quantity']." = $".($v['price'] * $v['quantity'])."\n";
					$total += $v['price'] * $v['quantity'];
					?>
					<div class="formatss">
					<form action="cart_modif.php" method="POST">
						<div><input id="prodname" type="hidden" name="name" value="<?php echo $v['name']?>" />
						<br> Change Quantity: <input id="qbar" type="number" name="quantity" value="<?PHP echo $v['quantity']?>" /><br />
						<div><br><input id="modify" type="submit" name="submit" value="✔"/></div>
					</form>
					<form action="cart_del.php" method="POST">
						<div><input type="hidden" name="name" value="<?php echo $v['name']?>" />
						<div><input id="delete" type="submit" name="submit" value="delete"/></div>
					</form>
					</div>
					<hr style="border: 1px solid black">
				</div>
				<?php
						}
					}
					if (!$printed) {
						unset($user_cart[$k]);
					}
				}
				?>
				<div>TOTAL PRICE : $<?php echo $total; ?></div>
				<form action="checkout.php" method="POST">
					<div><br><input type="submit" name="submit" value="Checkout"/></div>
				</form>
				<?php
			} else {
			?>
				<div>You do not have any items.</div>
			<?php
			}
			?>
		</div>
	</body>
</html>
<?php
	file_put_contents("../private/$curr_usr", serialize($user_cart));
?>