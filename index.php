<?php
require __DIR__ . '/includes/util.php';
require __DIR__ . '/includes/config.php';
$pageTitle  = "Operation: Please Forgive Us";
$navCurrent = "apology";
include __DIR__ . '/includes/header.php';
?>

<div class="sound-gate" data-sound-gate>
    <div class="sound-card">
        <div class="valentine-hearts" aria-hidden="true">💗 💌 💕</div>
        <p class="sound-kicker">A LITTLE APOLOGY FOR MDM</p>
        <h2>Will you hear us out? 🥺</h2>
        <p>We made this with a lot of regret, a little panic, and plenty of love.</p>
        <button type="button" data-enter-site>OPEN OUR APOLOGY 💗</button>
        <small>Tap to enter &amp; start the music ♫</small>
    </div>
</div>

<header class="hero-zone">
    <div class="hero-sticker">💘 OPERATION: WIN MDM'S HEART 💘</div>
    <p class="hero-kicker">VALENTINE APOLOGY • PBA1 • VERY VERY SORRY</p>
    <h1>Lecturer, we have<br><span class="scribble">a confession.</span></h1>
    <p class="lede">We did not submit the coding for <em><?= esc($assignment) ?></em> (<?= esc($course) ?>). So we made this little apology website to say one very important thing: <strong>we are sorry.</strong></p>
    <div class="hero-actions">
        <button class="chaos-btn primary" type="button" data-forgive>💗 Please Consider Forgiving Us</button>
        <button class="chaos-btn" type="button" data-panic>🐱 Emergency Cat Apology</button>
    </div>
    <p class="tiny-hint">Every little interaction is another way for us to say: we are sincerely sorry. 💗</p>
</header>

<section class="lecturer-console" aria-label="Lecturer forgiveness console">
    <div class="console-top"><span>MDM'S FORGIVENESS GARDEN 💗</span><span class="console-light"></span></div>
    <div class="meter-wrap">
        <div class="mood-face" data-mood-face>😡</div>
        <div class="meter-copy"><strong data-mood-title>We know we disappointed you</strong><span data-mood-copy>We are truly sorry, Mdm. We hope our actions can earn back your trust.</span></div>
        <div class="anger-meter"><div class="anger-fill" data-anger-fill></div></div>
        <div class="meter-labels"><span>🌱</span><span>🌷</span><span>🌹</span><span>🦋</span><span>💐</span></div><div class="garden-bed" data-garden-bed><span>🌱</span><span>🌱</span><span>🌱</span></div>
    </div>
    <button type="button" class="forgive-smash" data-forgive>PLEASE LET OUR APOLOGY BLOOM 🌷</button>
    <span class="smash-count">Sincerity sent: <b data-forgive-count>0</b>%</span>
</section>

<section class="play-card" aria-label="Interactive apology keyboard">
    <div class="play-copy">
        <span class="eyebrow">THE APOLOGY SYNTHESIZER</span>
        <h2>Type your disappointment away.</h2>
        <p>Every A–Z key makes a sound and launches a tiny piece of our academic panic into the atmosphere.</p>
    </div>
    <div class="key-stage" aria-hidden="true"><span class="key-display" data-key-display>?</span><span class="key-caption">LAST KEY</span></div>
    <div class="key-grid" aria-label="Playable keys">
        <?php foreach (range('A','Z') as $key): ?><button type="button" data-play-key="<?= $key ?>"><?= $key ?></button><?php endforeach; ?>
    </div>
</section>

<section class="desk-scene">
    <div class="coffee-ring" aria-hidden="true"></div>
    <div class="paperclip" aria-hidden="true">📎</div>
    <section class="sheet" aria-label="Submission sheet">
        <div class="sheet-label">SUBMISSION INCIDENT REPORT</div>
        <dl>
            <div class="row" style="--i:0"><dt>Students</dt><dd class="members"><?php foreach ($students as $s): ?><span><?= esc($s[0]) ?> (<?= esc($s[1]) ?>)</span><?php endforeach; ?></dd></div>
            <div class="row" style="--i:1"><dt>Lecturer</dt><dd><?= esc($lecturerFull) ?></dd></div>
            <div class="row" style="--i:2"><dt>Course</dt><dd><?= esc($course) ?></dd></div>
            <div class="row" style="--i:3"><dt>Assignment</dt><dd><?= esc($assignment) ?></dd></div>
            <div class="row" style="--i:4"><dt>Due date</dt><dd><?= esc($dueDate) ?></dd></div>
            <div class="row status"><dt>Status</dt><dd><span class="stamp"><?= esc($statusText) ?></span></dd></div>
        </dl>
    </section>
    <aside class="sticky-note note-one">Reminder:<br><b>SUBMIT.</b><br>Not “remember later.” 😭</aside>
    <aside class="sticky-note note-two">Dear future us:<br>START EARLIER!!!</aside>
</section>

<section class="block story-block">
    <span class="section-number">01</span><h2>What happened</h2>
    <p><?= esc($reasonText) ?></p><p class="note">no excuses. just the truth. ← lecturer please notice this part</p>
    <div class="excuse-machine">
        <div><span class="machine-label">EXCUSE DESTROYER 3000</span><strong data-excuse-text>“But lecturer…”</strong></div>
        <button type="button" data-shred>SHRED EXCUSE 🗑️</button>
    </div>
</section>

<section class="block wrong-zone">
    <span class="section-number">02</span><h2>Things we absolutely fumbled</h2>
    <ul class="wrongs"><?php foreach ($mistakes as $m): ?><li><?= esc($m) ?><span class="red-mark">✗</span></li><?php endforeach; ?></ul>
    <div class="teacher-comment">Needs improvement!!<br><span>— imaginary red pen</span></div>
</section>

<section class="block plan-zone">
    <span class="section-number">03</span><h2>The comeback plan</h2>
    <p class="mini-intro">Our redemption arc has three episodes:</p>
    <ol class="plan"><?php foreach ($steps as $idx => $s): ?><li style="--i:<?= $idx ?>"><span class="when"><?= esc($s[0]) ?></span><span class="what"><?= esc($s[1]) ?></span></li><?php endforeach; ?></ol>
    <p><a class="textlink big-link" href="letter.php">📨 Open the serious formal letter →</a></p>
</section>

<section class="promise-card">
    <div class="promise-seal">PROMISE<br>MODE</div><span class="section-number">04</span><h2>Our promise</h2><p><?= esc($promise) ?></p>
    <div class="signatures"><?php foreach ($students as $s): ?><p class="sig"><span class="sig-name"><?= esc($s[0]) ?></span><span class="sig-id"><?= esc($s[1]) ?></span></p><?php endforeach; ?></div>
</section>

<section class="final-boss">
    <div class="final-emoji" data-final-emoji>🥺</div><h2>One last thing, Mdm…</h2><p>Thank you for reading all the way here. We sincerely hope you can give us another chance.</p>
    <div class="final-actions"><button type="button" class="yes-btn" data-final-yes>💗 I’ll Consider Forgiving You</button><button type="button" class="no-btn" data-final-no>🤍 I’m Not Ready to Forgive Yet</button></div>
    <p class="final-message" data-final-message></p>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
