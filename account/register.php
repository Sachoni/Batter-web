<?php
include 'config.php';

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

// Encrypt password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Check if email or username already exists
$check = $conn->prepare("SELECT id FROM users WHERE email=? OR username=?");
$check->bind_param("ss", $email, $username);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    echo "User already exists!";
    exit();
}

// Insert new user
$stmt = $conn->prepare("INSERT INTO users (fullname, email, username, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $fullname, $email, $username, $hashed_password);

if ($stmt->execute()) {
    echo "Registration successful! <a href='login.html'>Login here</a>";
} else {
    echo "Error: " . $stmt->error;
}

$conn->close();
?>
