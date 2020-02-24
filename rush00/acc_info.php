<html>
	<head>
		<meta charset="UTF-8">
		<title>Ebabe</title>
		<link rel="stylesheet" href="index.css">
		<style>
			.tit {
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
					<a href="#">CLOTHING</a>
					<a href="#">ACCESSORIES</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">WOMEN</button>
				<div class="dropdown-menu">
					<a href="#">SHOES</a>
					<a href="#">CLOTHING</a>
					<a href="#">ACCESSORIES</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">KIDS</button>
				<div class="dropdown-menu">
					<a href="#">SHOES</a>
					<a href="#">CLOTHING</a>
					<a href="#">ACCESSORIES</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">SPORTS</button>
				<div class="dropdown-menu">
					<a href="#">SHOES</a>
					<a href="#">CLOTHING</a>
					<a href="#">ACCESSORIES</a>
				</div>
			</div>
			<div class="logged">
				<button class="dropbtn"><?php session_start(); echo $_SESSION['loggued_on_user']?></button>
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
        <div class="mod_info">
            <h2 class="tit">Account Information</h2><br />
            User ID: <b><?php echo $_SESSION['loggued_on_user']?></b><br /><br>
			<?php
				$acc_info = unserialize(file_get_contents("../private/passwd"));
				foreach ($acc_info as $acc=>$usr)
				{
					if (($usr['login'] === $_SESSION['loggued_on_user']))
					{
						?>
							E-mail: <b><?php echo $usr['email']?></b><br /><br>
							Phone #: <b><?php echo $usr['phone']?></b><br /><br>
							Address: <b><?php echo $usr['address']?></b><br /><br>
						<?php
					}
				}
			?>
            <?php
                require_once('auth.php');
                if (ad_auth($_SESSION['loggued_on_user']))
                {
                    ?>
                    <b>Already an admin</b><br /><br>
                    <?php
                } else
                {
                    ?>
                    <a href="create_admin.php"><button>Request an admin access</button></a><br /><br>
                    <?php
                }
			?>
			<a href="modif_acc.php"><button>Modify information</button></a><br /><br>
            <a href="modif.html"><button>Change Password</button></a><br /><br>
			<a href="delete.html"><button>Delete an Account</button></a><br /><br>
        </div>
	</body>
</html>