<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $firstName = htmlspecialchars(trim($_POST["first"]));
    $lastName = htmlspecialchars(trim($_POST["last"]));
    $email = htmlspecialchars(trim($_POST["email"]));


   // Email details
    $to = "cdg341@gmail.com"; // Replace with your email address
    $subject = "New Form Submission";
    $message = "
        <html>
        <head>
            <title>New Form Submission</title>
        </head>
        <body>
            <h2>Form Data Submitted</h2>
            <p><strong>Name:</strong> $firstName $lasName</p>
            <p><strong>Email:</strong> $email</p>
        </body>
        </html>
    ";
    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: cdg341@gmail.com" . "\r\n"; // Replace with your sender email address

    // Send email
    if(mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request method.";
}
?>