<?php
/** Escape text so it can never inject HTML or script into the page. */
function esc($s) {
    return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
}
