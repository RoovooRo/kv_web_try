<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt - Best For All Kinnisvara</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <a href="index.html">
                        <img src="images/logo.png" alt="Best For All Logo" class="logo-img">
                        <div class="logo-text">
                            <h2>BEST FOR ALL</h2>
                            <span>KINNISVARA</span>
                        </div>
                    </a>
                </div>
                <ul class="nav-menu">
                    <li><a href="listings.html" class="nav-link">Pakkumised</a></li>
                    <li><a href="contact.html" class="nav-link active">Kontakt</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="contact-hero">
            <div class="container">
                <h1>Võta Meiega Ühendust</h1>
                <p>Oleme alati valmis teid aitama. Võtke julgelt ühendust!</p>
            </div>
        </section>

        <section class="contact-content">
            <div class="container">
                <div class="contact-grid">
                    <!-- Contact Information -->
                    <div class="contact-info-section">
                        <h2>Kontaktandmed</h2>
                        <div class="contact-methods">
                            <div class="contact-item">
                                <span class="contact-icon">📧</span>
                                <div class="contact-details">
                                    <strong>E-mail</strong>
                                    <a href="mailto:juri@bestkv.ee">juri@bestkv.ee</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <span class="contact-icon">📱</span>
                                <div class="contact-details">
                                    <strong>WhatsApp</strong>
                                    <a href="https://wa.me/3725140208" target="_blank">+372 514 0208</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <span class="contact-icon">📘</span>
                                <div class="contact-details">
                                    <strong>Facebook</strong>
                                    <a href="https://www.facebook.com/BestForAllKV" target="_blank">BestForAllKV</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="contact-form-section">
                        <h2>Saada Sõnum</h2>
                        <form class="contact-form" id="contactForm">
                            <div class="form-group">
                                <label for="name">Nimi *</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Telefon</label>
                                <input type="tel" id="phone" name="phone">
                            </div>
                            <div class="form-group">
                                <label for="subject">Teema</label>
                                <input type="text" id="subject" name="subject">
                            </div>
                            <div class="form-group">
                                <label for="message">Sõnum *</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Saada Sõnum</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Agents Section -->
        <section class="our-agents">
            <div class="container">
                <h2>Meie Meeskond</h2>
                <div class="agents-grid">
                    <div class="agent-card">
                        <div class="agent-photo">
                            <img src="images/agents/juri.jpg" alt="Jüri Võssokov">
                        </div>
                        <div class="agent-content">
                            <h3>Jüri Võssokov</h3>
                            <p class="agent-title">Kinnisvaramaakler</p>
                            <p class="agent-phone">📞 +372 5086003</p>
                            <a href="https://www.kv.ee/maakler/jurivossokov1" class="agent-link" target="_blank">Vaata profiili KV.ee</a>
                        </div>
                    </div>
                    <div class="agent-card">
                        <div class="agent-photo">
                            <img src="images/agents/taavi.jpg" alt="Taavi Eplik">
                        </div>
                        <div class="agent-content">
                            <h3>Taavi Eplik</h3>
                            <p class="agent-title">Kinnisvaramaakler</p>
                            <p class="agent-phone">📞 +372 5033423</p>
                            <a href="https://www.kv.ee/maakler/taavi_eplik" class="agent-link" target="_blank">Vaata profiili KV.ee</a>
                        </div>
                    </div>
                    <div class="agent-card">
                        <div class="agent-photo">
                            <img src="images/agents/elina.jpg" alt="Elina Boguslavski">
                        </div>
                        <div class="agent-content">
                            <h3>Elina Boguslavski</h3>
                            <p class="agent-title">Kinnisvaramaakler</p>
                            <p class="agent-phone">📞 +372 5110231</p>
                            <a href="https://www.kv.ee/maakler/elinaboguslavski1" class="agent-link" target="_blank">Vaata profiili KV.ee</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 Best For All Kinnisvara. Kõik õigused kaitstud.</p>
        </div>
    </footer>

    <script src="js/script.js"></script>
    <script>
        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone') || 'Ei sisestatud';
            const subject = formData.get('subject') || 'Üldine päring';
            const message = formData.get('message');
            
            // Create email body
            const emailBody = `Nimi: ${name}%0D%0A` +
                            `E-mail: ${email}%0D%0A` +
                            `Telefon: ${phone}%0D%0A` +
                            `Teema: ${subject}%0D%0A%0D%0A` +
                            `Sõnum:%0D%0A${message}`;
            
            // Open email client
            window.location.href = `mailto:juri@bestkv.ee?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
            
            // Show success message
            alert('Täname! Teie sõnum avatakse teie e-posti programmis.');
        });
    </script>
</body>
</html>
