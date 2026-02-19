import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header>
          <h1>My Quizz</h1>
          <nav aria-label="Navigation principale">
            <p>Pour en savoir plus, consultez <a href="about/" style="text-decoration: underline;">la page À propos</a>.</p>
          </nav>
        </header>

        <nav class="topnav" aria-label="Réseaux sociaux">
          <a href="#" class="fa fa-facebook" title="Facebook" aria-label="Accédez à notre page Facebook"></a>
          <a href="#" class="fa fa-twitter" title="Twitter" aria-label="Accédez à notre page Twitter"></a>
          <a href="#" class="fa fa-rss" title="RSS" aria-label="Accédez à notre flux RSS"></a>
        </nav>

        <main>
          <section class="row">
            <article class="card">
              <h2>Nom étudiant</h2>
              <p>description</p>
              <section id="quiz" aria-label="Quiz principal">
                <h3>A TOI DE JOUER</h3>
                
                <div id="question" tabindex="-1" aria-label="Question actuelle"></div>
                
                <div id="proposals" role="group" aria-label="Options de réponse"></div>

                <div id="feedback-message" aria-live="assertive" style="margin-top: 15px; font-weight: bold;"></div>
              </section>
            </article>

            <aside class="card">
              <img src="/question.png" alt="Illustration pour les questions du quizz" width="500" height="600">
            </aside>
          </section>
        </main>

        <footer>
          <p>&copy; 2024</p>
        </footer>
`

initQuizz();