import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" role="banner" style="cursor:pointer;">
          <h1>My Quizz</h1>
          <nav aria-label="Navigation principale">Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a></nav>
        </div>


        <div class="topnav" role="navigation" aria-label="Réseaux sociaux">
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
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <div id="quiz" role="main" aria-label="Quiz principal">
                <h2>A TOI DE JOUER</h2>
                <div id="question" role="heading" aria-level="2" aria-live="polite"></div>
                <div id="proposals" role="group" aria-label="Options de réponse"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.png" alt="Illustration pour les questions du quizz" width="500" height="600">
            </div>
        </div>

        <div class="footer" role="contentinfo">
          <h2>@2024</h2>
        </div>
`

initQuizz();