<?php
$hdrTitle   = isset($pageTitle) ? $pageTitle : "We are sorry";
$navCurrent = isset($navCurrent) ? $navCurrent : "";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= esc($hdrTitle) ?></title>
    <script>document.documentElement.className = "js";</script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<audio id="theme-song" preload="auto" loop>
    <source src="assets/theme-song.mp3" type="audio/mpeg">
</audio>
<div class="page">
    <nav class="nav" aria-label="Pages">
        <a href="index.php"<?= $navCurrent === "apology" ? ' aria-current="page"' : '' ?>>Our apology</a>
        <a href="letter.php"<?= $navCurrent === "letter" ? ' aria-current="page"' : '' ?>>Our letter</a>
    </nav>
