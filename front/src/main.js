import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header>
          <h1>My Quizz</h1>
          <nav aria-label="Navigation principale">
            <p>Pour accéder a la page /about <a href="about/">click ici</a></p>
          </nav>
        </header>

        <nav class="topnav" aria-label="Réseaux sociaux">
          <a href="#" class="fa fa-facebook" title="Facebook" aria-label="Accédez à notre page Facebook"></a>
          <a href="#" class="fa fa-twitter" title="Twitter" aria-label="Accédez à notre page Twitter"></a>
          <a href="#" class="fa fa-google" title="Google" aria-label="Accédez à notre page Google"></a>
          <a href="#" class="fa fa-linkedin" title="LinkedIn" aria-label="Accédez à notre page LinkedIn"></a>
          <a href="#" class="fa fa-youtube" title="YouTube" aria-label="Accédez à notre page YouTube"></a>
          <a href="#" class="fa fa-instagram" title="Instagram" aria-label="Accédez à notre page Instagram"></a>
          <a href="#" class="fa fa-pinterest" title="Pinterest" aria-label="Accédez à notre page Pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost" title="Snapchat" aria-label="Accédez à notre page Snapchat"></a>
          <a href="#" class="fa fa-skype" title="Skype" aria-label="Accédez à notre page Skype"></a>
          <a href="#" class="fa fa-android" title="Android" aria-label="Accédez à notre page Android"></a>
          <a href="#" class="fa fa-dribbble" title="Dribbble" aria-label="Accédez à notre page Dribbble"></a>
          <a href="#" class="fa fa-vimeo" title="Vimeo" aria-label="Accédez à notre page Vimeo"></a>
          <a href="#" class="fa fa-tumblr" title="Tumblr" aria-label="Accédez à notre page Tumblr"></a>
          <a href="#" class="fa fa-vine" title="Vine" aria-label="Accédez à notre page Vine"></a>
          <a href="#" class="fa fa-foursquare" title="Foursquare" aria-label="Accédez à notre page Foursquare"></a>
          <a href="#" class="fa fa-stumbleupon" title="StumbleUpon" aria-label="Accédez à notre page StumbleUpon"></a>
          <a href="#" class="fa fa-flickr" title="Flickr" aria-label="Accédez à notre page Flickr"></a>
          <a href="#" class="fa fa-yahoo" title="Yahoo" aria-label="Accédez à notre page Yahoo"></a>
          <a href="#" class="fa fa-reddit" title="Reddit" aria-label="Accédez à notre page Reddit"></a>
          <a href="#" class="fa fa-rss" title="RSS" aria-label="Accédez à notre flux RSS"></a>
        </nav>

        <main>
          <section class="row">
            <article class="card">
              <h2>Nom étudiant</h2>
              <p>description</p>
              <section id="quiz" aria-label="Quiz principal">
                <h3>A TOI DE JOUER</h3>
                <div id="question" aria-live="polite" aria-label="Question actuelle"></div>
                <div id="proposals" role="group" aria-label="Options de réponse"></div>
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