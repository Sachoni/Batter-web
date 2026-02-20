<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>

<h2>Welcome, <?php echo $_SESSION['fullname']; ?> 🎉</h2>

<p>You are logged in.</p>

<a href="logout.php">Logout</a>

</body>
</html>
