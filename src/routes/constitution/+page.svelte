<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneTwo;
    let two, twoOne, twoOneOne, twoTwo;
    let three, threeOne;
    let four, fourOne;
    let five, fiveOne, fiveTwo, fiveThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">UPA DYNASTY LEAGUE CONSTITUTION</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: Roster</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Positional Breakdown</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Waiver Wire</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Trades</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Veto Process</h4>
                <h5 class="noUnderscore clickable" on:click={() => goToSection(twoOneOne)}>2.1.1 The Committee</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Trade Deadline</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Scoring System</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Annual League Meeting</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Miscellaneous Rules</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 The True Dynasty Rule</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Postseason</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 Playoffs</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>5.2 Toilet Bowl</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>5.3 Seeding Tiebreakers</h4>
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1: Rosters</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Positional Breakdown</h3>
    
    <p>25 Total Players</p>
    
    <p class="underscore">Starters</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>K</li>
    </ul>
    
    <p>12 Bench slots</p>
    
    <p>4 Taxi Squad slots</p>

    <p>3 IR slots (Player must be labeled as IR, Out, Doubtful, or Covid in the Sleeper app)</p>
    
    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Waiver Wire</h3>
    <p>FAAB Waiver wire system. Each team will begin the season with $100. $0 bids are allowed. Bids will process Wednesdays through Sundays at 3AM EST, with the exception of players whose NFL team has already played their game that week. They will not be eligible for pickup until the following Wednesday.</p>

    <p>FAAB will reset twice per year: once in January, once in September.</p>
    
    <h2 class="sectionHeading" bind:this={two}>Section 2: Trades</h2>
    <p>Trades may consist of players, draft picks (up to 3 years away), and/or FAAB. Trades will process immediately but may be reversed if necessary.</p>
    
    <p>All assets of a trade must be done within the Sleeper app. Real-life assets are prohibited. For example: you may not trade Diontae Johnson for 7 Taco Bell Crunchwraps and a 3rd round pick.</p>
    
    <h3 bind:this={twoOne}>2.1 Veto Process</h3>
    <p>Any member of the league can challenge the fairness of a trade, and the Committee will determine whether or not it should be vetoed.</p>

    
    <h4 bind:this={twoOneOne}>2.1.1 The Committee</h4>
        <p>The Committee is a group of league members who make decisions such as vetoing trades. However, it is extremely rare for such measures to be taken.</p>
    
        <p>The Committee currently consists of Drew, Ben, Derek, and Survive. In the event of a 2-2 tie, Dork will be the tiebreaking vote.</p>
    
    <h3 bind:this={twoTwo}>2.2 Trade Deadline</h3>
    <p>We just changed this, and I don't actually remember what we decided the new deadline will be, so I'll have to come back to this later.</p>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3: Scoring System</h2>
    <p>The league scoring system breakdown is listed on the Sleeper app (for the most part, it follows typical Half-PPR scoring). The scoring system may be subject to change year-to-year depending on the results of the annual league meeting.</p>

    <h3 bind:this={threeOne}>3.1 Annual League Meeting</h3>
    <p>Every January, we gather as many league members as possible into a Discord call in order to vote on new rules and ammendments that had been proposed over the previous year.</p>
    
    <h2 class="sectionHeading" bind:this={four}>Section 4: Miscellaneous Rules</h2>
    
    <h3 bind:this={fourOne}>4.1 The True Dynasty Rule</h3>
    <p>If any team wins 3 consecutive championships, all rosters will be reset, and a new startup draft will take place.</p>
    
    <h2 class="sectionHeading" bind:this={five}>Section 5: Postseason</h2>

    <h3 bind:this={fiveOne}>5.1 Playoffs</h3>
    <p>At the end of the regular season, the top 6 teams will make the playoffs. The first round of playoffs will commence in week 15. The top 2 teams receive a round 1 bye. Each playoff matchup will only last one week, and the winner will advance. Week 18 will not be used.</p>
    
    <h3 bind:this={fiveTwo}>5.2 Toilet Bowl</h3>
    <p>At the end of the regular season, the BOTTOM 6 teams will make the toilet bowl. The first round of the toilet bowl will commence in week 15. The bottom 2 teams receive a round 1 bye. Each toilet bowl matchup will only last one week, and the LOSER will advance. Week 18 will not be used.</p>

    <p>The loser of the toilet bowl championship receives a punishment. The 6 playoff teams think of punishment ideas, but only the champion gets the final say.</p>
    
    <h3 bind:this={fiveThree}>5.3 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record, the tiebreakers will go as follows:</p>

    <ol>
        <li>Points For</li>
        <li>Points Against</li>
        <li>Head to Head Record (I think)</li>
        <li>Probably some best 4-of-7 series on Pokemon Showdown</li>
    </ol>

</div>
