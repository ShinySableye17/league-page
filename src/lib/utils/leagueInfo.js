/*   STEP 1   */
export const leagueID = "917926121289777152"; // your league ID
export const leagueName = "UPA Dynasty League"; // your league name
export const dues = null; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the official UPA Fantasy Football website. We're a group of friends who met online through Pokemon and have since continued to bond through sports. Some of us have known each other since as early as 2015, and our dynasty league was founded in 2020.</p>
     <ul>
     <li>My name is <a style="color:#1ee331;"><b>Ben</b></a>. I run the site and also make <a href="https://youtube.com/playlist?list=PLshnoGu2e9MV5_3pnAszrttY25D4BVNXf" target="_blank">annual highlight videos.</a></li>
     <li><a style="color:#1ee331;"><b>Drew</b></a> is the commissioner and is in charge of setting up the league meeting every January.</li>
     <li>"The Committee" consists of the two of us as well as <a style="color:#1ee331;"><b>Derek</b></a> and <a style="color:#1ee331;"><b>Survive</b></a>.</li>
     <ul>
           <li>On the very rare occassions when a controversial issue arises (i.e. alleged collusion), the 4 of us discuss and vote on a course of action. In the event of a 2-2 tie, <a style="color:#1ee331;"><b>Dork</b></a> will have the tiebreaking vote.</li>
     </ul>
     <li>and <a style="color:#1ee331;"><b>Scrappy</b></a> is in charge of kicking our asses every year.</li>
     </ul>
  <p><b><ins>A Brief History of the League</ins></b><br>
     After the redraft league was a hit in 2019, we started up a dynasty league the following year. Of the 12 guys who drafted on that fateful night of August 9, 2020 -- Drew, Rabz, Eshaan, Derek, Dork, Pure, Ben, Brett, Noah, Survive, Scrappy, and Matt <a href="https://sleeper.com/draft/nfl/560299235773579264" target="_blank">(in that order)</a> -- 9 remain in the league today.
     <ul>
          <li><a style="color:#1ee331;"><b>Pure</b></a> was replaced by <a style="color:#1ee331;"><b>Bronson</b></a> after the 2020 season.</li>
          <li><a style="color:#1ee331;"><b>Brett</b></a> was replaced by <a style="color:#1ee331;"><b>Tyler</b></a> (AKA Retikai) prior to the start of the 2022 season.</li>
          <li>And as for <a style="color:#1ee331;"><b>Noah</b></a>'s franchise...</li>
               <ul>
                    <li>Noah was replaced by <a style="color:#1ee331;"><b>Karm</b></a> after the 2021 season.</li>
                    <li>Karm was replaced by <a style="color:#1ee331;"><b>Riches</b></a> 3 weeks into the 2022 season.</li>
                    <li>Riches was replaced by <a style="color:#1ee331;"><b>Jose</b></a> after the 2022 season.</li>
                         <ul>
                              <li>It's not even like the team is atrocious; its ownership keeps shifting for unrelated reasons. Hopefully Jose can finally bring this franchise the stability it needs.</li>
                         </ul>
               </ul>
     </ul>
<p><b><ins>One-sentence write-ups of each franchise's history (prior to the 2023 season)</ins></b><br>
    <ul>
      <li><a style="color: #1ee331;"><b>Scrappy</b></a>: <a style="color: Gold;">31 wins</a> - <a style="color: LightCoral;">10 losses</a> <a style="color: LightGreen;">(75.61%)</a></li>
        <ul>
          <li>This dude has won 2 of our 3 championships.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Dork</b></a>: <a style="color: Gold;">26 wins</a> - <a style="color: LightCoral;">15 losses</a> <a style="color: LightGreen;">(63.41%)</a></li>
        <ul>
          <li>The only player to finish top 3 every year, Dork has been very successful thus far; however, with how things are currently projected, his team may cool down this season.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Survive</b></a>: <a style="color: Gold;">25 wins</a> - <a style="color: LightCoral;">16 losses</a> <a style="color: LightGreen;">(60.98%)</a></li>
        <ul>
          <li>Survive won the championship in 2021 against his will, and now he's a powerhouse.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Drew</b></a>: <a style="color: Gold;">24 wins</a> - <a style="color: LightCoral;">17 losses</a> <a style="color: LightGreen;">(58.54%)</a></li>
        <ul>
          <li>Despite having one of the strongest rosters on paper year-in and year-out, Drew surprisingly has yet to make a championship appearance.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Matt</b></a>: <a style="color: Gold;">22 wins</a> - <a style="color: LightCoral;">19 losses</a> <a style="color: LightGreen;">(53.66%)</a></li>
        <ul>
          <li>After being stuck in the middle of the pack for the first two years, Matt's team netted him a semifinals appearance with a breakout 2022 season; however, he was once again unable to finish the job, and quite frankly, <a href="https://youtu.be/MFc71YxKee0?t=5118" target="_blank">he only has himself to blame</a>.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Rabz</b></a>: <a style="color: Gold;">19 wins</a> - <a style="color: LightCoral;">22 losses</a> <a style="color: LightGreen;">(46.34%)</a></li>
        <ul>
          <li>After 3 disappointing seasons, Rabz's team has turned the corner and is in a golden position moving forward, not only having a strong roster for 2023, but for years and years to come.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Brett/Tyler</b></a>: <a style="color: Gold;">19 wins</a> - <a style="color: LightCoral;">22 losses</a> <a style="color: LightGreen;">(46.34%)</a></li>
        <ul>
          <li>Brett started the fire by trading most of his draft capital for aging veterans, and Tyler poured on the gasoline by trading away the picks that remained.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Pure/Bronson</b></a>: <a style="color: Gold;">19 wins</a> - <a style="color: LightCoral;">22 losses</a> <a style="color: LightGreen;">(46.34%)</a></li>
        <ul>
          <li>Pure left Bronson with a very nice team in addition to the 2nd overall pick following the 2020 season, and after a playoff appearance in 2021, Bronson blew it up and rebuilt it with youth, including 4 top-10 dynasty WRs.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Eshaan</b></a>: <a style="color: Gold;">18 wins</a> - <a style="color: LightCoral;">23 losses</a> <a style="color: LightGreen;">(43.90%)</a></li>
        <ul>
          <li>Eshaan bounced back from a very disappointing 2020 season with playoff appearances in both 2021 and 2022, but his team has yet to reach elite status.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Ben</b></a>: <a style="color: Gold;">16 wins</a> - <a style="color: LightCoral;">25 losses</a> <a style="color: LightGreen;">(39.02%)</a></li>
        <ul>
          <li>Haha yeah so my team was goated in 2020, but then everyone fell off a cliff in 2021, and I blew it up prior to the start of 2022, and things are still looking a bit dicey, but it's okay because I own 33% of the 2024 1st round picks.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Noah/Karm/Riches/Jose</b></a>: <a style="color: Gold;">15 wins</a> - <a style="color: LightCoral;">26 losses</a> <a style="color: LightGreen;">(36.59%)</a></li>
        <ul>
          <li>The degree to which Noah's youth-heavy strategy in the startup draft ended up backfiring is kind of unbelievable, but the team still has plenty of promise, it's just that the rebuild process has been a bit of a slow one.</li>
        </ul>
      <li><a style="color: #1ee331;"><b>Derek</b></a>: <a style="color: Gold;">12 wins</a> - <a style="color: LightCoral;">29 losses</a> <a style="color: LightGreen;">(29.27%)</a></li>
        <ul>
          <li>After 3 years of being towards the bottom of the standings, Derek's team is in excellent shape to turn the corner in 2023, and, just like Rabz, he should be a contender for a long time to come.</li>
        </ul>
      </ul>
      </p>
  <p>If you want to see every roster at once, check out the <a href="https://docs.google.com/spreadsheets/d/1WjV37k6_B8qeKNK0lPYXn7_S7Rtyy8x95TpYslqZRd4/edit?usp=sharing" target="_blank">UPA Fantasy Football doc.</a></p>
  <p><i>Disclaimer: I'm still relatively new to coding. This website was built from a template made by Nick Melhado, and I'm basically just learning as I go along. I intend on making a bunch of miscellaneous tweaks in the future.</i></p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "567468371333689344",
      "name": "Ben",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Maryland", // (optional)
      "bio": "I eat, sleep, and breathe fantasy football.",
      "photo": "/managers/Ben.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6955, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 6, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "457130663779233792",
      "name": "Drew",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Indiana", // (optional)
      "bio": null,
      "photo": "/managers/Drew.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5846, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "568299263410716672",
      "name": "Dork",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "California", // (optional)
      "bio": null,
      "photo": "/managers/Dork.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 331, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "568245074119483392",
      "name": "Matt",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": null, // (optional)
      "bio": "Unluckiest league member.",
      "photo": "/managers/Matt.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: null, // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3262, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "ACL tears are forbidden.",
      "tradingScale": 3, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "568283200787632128",
      "name": "Derek",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Alabama", // (optional)
      "bio": "Mr. 0-2 coming for another.",
      "photo": "/managers/Derek.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rabz", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Rabz.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 2592, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "359495162264592384",
      "name": "Survive",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Florida", // (optional)
      "bio": "Started playing in 2017 but it was only redraft. I did not consistently play fantasy until this startup Dynasty league but its been fun so far!",
      "photo": "/managers/Survive.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: null, // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6943, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Fucking tanking.",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "636319325908832256",
      "name": "Tyler",
      "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Massachusetts", // (optional)
      "bio": null,
      "photo": "/managers/Tyler.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dork", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Dork.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4149, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "One more year!",
      "tradingScale": 9, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "568298746088951808",
      "name": "Rabz",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Illinois", // (optional)
      "bio": "The bears fan.",
      "photo": "/managers/Rabz.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Bronson", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8289, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Make the playoffs.",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "568523166477811712",
      "name": "Eshaan",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "California", // (optional)
      "bio": null,
      "photo": "/managers/Eshaan.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: null, // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": null, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "568239872904937472",
      "name": "Scrappy",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Texas", // (optional)
      "bio": null,
      "photo": "/managers/Scrappy.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: null, // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": null, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "643935933183651840",
      "name": "Bronson",
      "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Florida", // (optional)
      "bio": null,
      "photo": "/managers/Bronson.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "tb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: null, // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": null, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "659654554102620160",
      "name": "Jose",
      "tookOver": 2023, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Washington", // (optional)
      "bio": null,
      "photo": "/managers/Jose.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: null, // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": null, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
