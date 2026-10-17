<?php
/*
  ============================================================
   All the text on the website comes from this file.
   Change the text between the quotation marks, save, and
   upload the file again. Do not delete the quotation marks
   or semicolons. If you need a quotation mark inside a
   sentence, write \" instead.
  ============================================================
*/

// ---- Who is saying sorry, and to whom ----
$students = [
    ["TAN KUAN YEN",                     "25DIT24F1044"],
    ["MUHAMMAD HAZMI BIN ZAIM",          "25DIT24F1141"],
    ["SITI ZULAIHA BINTI JAHABAR SALIM", "25DIT24F1152"],
];
$lecturerFull = "TS. NOOR HAYATI BINTI BASAN";

// ---- The assignment (still to fill in) ----
$course     = "DFP50463 – JAVA-BASED APPLICATION DEVELOPMENT";
$assignment = "PROBLEM BASED ASSIGNMENT 1";
$dueDate    = "Original due date";   // for example "10 October 2026"
$newDate    = "";                    // the date you ask to submit by, for example "24 October 2026".
                                     // Leave "" if you want your lecturer to decide.

// ---- The text stamped on the submission sheet ----
$statusText = "Not Submitted Coding";

// ---- What happened: write the TRUE reason, short and plain ----
$reasonText = "We did not manage our time well, and we left the coding too late to finish it properly.";

// ---- What you got wrong (keep each one short and honest) ----
$mistakes = [
    "We did not submit the coding on the due date, and we did not tell you before it passed.",
    "We left the work until the last days, so there was no room for anything to go wrong.",
    "We did not ask you for help or an extension before the deadline.",
];

// ---- How you will make it right (a real sequence of steps) ----
$submitWhen = $newDate === "" ? "When you allow" : $newDate;
$steps = [
    ["Today",       "We are telling you ourselves, instead of waiting for you to ask."],
    [$submitWhen,   "We submit the finished coding, and we accept any mark deduction you decide is fair."],
    ["From now on", "We plan each assignment backwards from its deadline and finish one day early."],
];

// ---- Your promise ----
$promise = "We will treat every deadline as fixed from now on. We will start earlier, write our deadlines down, "
         . "and tell you early if something goes wrong. Thank you for your time and for the chance to put this right.";

// ============================================================
//  BAHASA MALAYSIA - used ONLY by the formal letter (letter.php)
//  The main apology page (index.php) stays in English.
// ============================================================
$dueDateMs = "Tarikh akhir asal";    // contoh "10 Oktober 2026"
$newDateMs = "";                     // tarikh penghantaran baharu, contoh "24 Oktober 2026".
                                     // Biarkan "" jika pensyarah ingin menentukan.

$reasonTextMs = "Kami tidak menguruskan masa dengan baik, dan kami melewatkan kerja coding sehingga "
              . "kami tidak sempat menyiapkannya dengan sempurna.";

$mistakesMs = [
    "Kami tidak menghantar coding pada tarikh akhir, dan kami tidak memaklumkan kepada Mdm sebelum tarikh tersebut berlalu.",
    "Kami menangguhkan kerja sehingga hari-hari terakhir, sehingga tiada ruang jika berlaku sebarang masalah.",
    "Kami tidak meminta bantuan atau lanjutan tempoh daripada Mdm sebelum tarikh akhir.",
];

$submitWhenMs = $newDateMs === "" ? "Apabila dibenarkan" : $newDateMs;
$stepsMs = [
    ["Hari ini",       "Kami memaklumkan sendiri kepada Mdm, dan tidak menunggu sehingga Mdm bertanya."],
    [$submitWhenMs,    "Kami menghantar coding yang telah siap, dan kami menerima sebarang pemotongan markah yang Mdm anggap adil."],
    ["Mulai sekarang", "Kami merancang setiap tugasan dengan mengira ke belakang dari tarikh akhirnya dan menyiapkannya sehari lebih awal."],
];

$promiseMs = "Mulai sekarang, kami akan menganggap setiap tarikh akhir sebagai muktamad. Kami akan memulakan kerja lebih awal, "
           . "mencatat tarikh akhir kami, dan memaklumkan kepada Mdm lebih awal jika berlaku sebarang masalah. "
           . "Terima kasih atas masa Mdm dan peluang untuk memperbaiki kesilapan ini.";
