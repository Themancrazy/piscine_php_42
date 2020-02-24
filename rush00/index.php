<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Ebabe</title>
		<link rel="stylesheet" href="index.css">
		<style>
			body {
				height: 10%;
				background-image: url("https://www.bountyjobs.com/wp-content/uploads/2016/04/32344-Blurred-Backgrounds.jpg");
				background-size: 120%;
			}
			.new_item_container{
				margin-top: 1%;
				display: flex;
				flex-direction: row;
				overflow-x: auto;
				box-shadow: -7px 42px 54px 9px rgba(0,0,0,0.75);
				background: linear-gradient(164deg,#ff0010 0%, #e06a14 80%);
			}
			.lamerde {	
				height: 470px;
				width: 360px;
				margin: 2% 2%;
				background-color: grey;
				box-shadow: 0px -7px 24px 11px rgba(0,0,0,0.75);
				border-radius: 10px;
			}
			.lamerde img, form {	
				max-height: 250px;
				max-width: 250px;
				border-radius: 10px;
			}
			.center {
				text-align: center;
			}
			.mtitle {
				font-size: 65px;
				text-decoration: underline;
				text-decoration-style: double;
			}
			#name {
				text-decoration: underline;
				font-size: 22px;
			}
			.safeimg {
				min-height: 270px;
				background-color: grey;
				border-radius: 10px;
			}
			#hrr {
				border: 2px solid black;
			}
			.sfont {
				font-family: arial;
			}
			#price {
				font-style: italic;
			}
			#op {
				font-size: 40px;
				font-family: 'Righteous', cursive;
				text-align: center;
				text-decoration: underline;
			}
		</style>
	</head>
	<body >
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
			<?php
				session_start();
				if ($_SESSION['loggued_on_user']){
					?>
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
								<a href="enter_product.php">Add Product</a>
								<?php
							}
							?>
							<a href="logout.php"><b>Logout</b></a>
						</div>
					</div>
					<?php
				} else
				{
					?>
					<div class="loginbtn"><a href="login.html"><button class="dropbtn"><b>Login</b></button></a></div>
					<?php
				}
			?>
		</div>
		<h1 class="mtitle"><br> Ebabe</h1>
		<br><br><br><br><hr id="hrr"><hr id="hrr">
		<h1 id="op">Our Products: </h1>
		<div class="new_item_container">
			<?PHP
				$items = unserialize(file_get_contents("../private/item"));
				foreach($items as $key=>$val)
				{
					?>
					<div class="lamerde center">
						<div class="safeimg"><img class="new_item" src="<?php echo $val['url']?>"><br /></div>
						<b id="name" class="sfont"><?php echo $val['name']?></b>
						<?php
							require_once("auth.php");
							if (ad_auth($_SESSION['loggued_on_user']) && $val['user'] === $_SESSION['loggued_on_user'])
							{
								?>
								<form class="new_item"action="product_del.php" method="POST">
									<div class="center sfont"><br><input id="name" type="hidden" name="name" value="<?php echo $val['name']?>" /></div>
									<div class="center sfont"><input type="submit" name="submit" value="Delete product"/><br><br></div>
								</form>
								<?php
							}
						?>
						<b id="price" >$<?php echo $val['price']?></b><br><br>
						<?php if ($_SESSION['loggued_on_user']) { ?>
						<form action="cart.php" method="POST">
							<div class="center sfont"><input type="hidden" name="name" value="<?php echo $val['name']?>" /></div>
							<div class="center sfont"><input type="number" name="quantity" value="" required placeholder="Enter Quantity"/><br /><br></div>
							<div class="center sfont"><input type="submit" name="submit" value="Add to cart"/><br><br></div>
						</form>
						<?php } ?>
					</div>
					<?php
				}
			?>
		</div>
		<br><br><br><br><br><hr id="hrr"><hr id="hrr">
	</body>
</html>