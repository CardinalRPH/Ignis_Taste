
Feature('Liking unliking Restaurant');

Scenario('Check Favorite', ({ I }) => {
    I.amOnPage('/#/favorite');
    I.seeElement('#grid-container-1');
    I.see('No Restaurant Favorited');
    I.dontSeeElement('.card');
});

Scenario('Check Home', ({ I }) => {
    I.amOnPage('/');
    I.wait(1)
    I.seeElement('#grid-container-1');
    I.seeElement('.card');
});

Scenario('Check Detail', ({ I }) => {
    I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
    I.seeElement('#post-contain');
    I.wait(1)
    I.seeElement('[aria-label="like this restaurant"]');
    I.dontSeeElement('[aria-label="unlike this restaurant"]')
});


Scenario('Test Liking', ({ I }) => {
    I.amOnPage('/#/favorite');
    I.wait(1)
    I.seeElement('#grid-container-1');
    I.see('No Restaurant Favorited');
    I.dontSeeElement('.card');

    I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
    I.seeElement('#post-contain');
    I.wait(1);
    I.seeElement('#outer-like');

    I.seeElement('[aria-label="like this restaurant"]');
    I.dontSeeElement('[aria-label="unlike this restaurant"]');

    //Liking Restaurant
    I.click('#outer-like');

    I.seeElement('[aria-label="unlike this restaurant"]');
    I.dontSeeElement('[aria-label="like this restaurant"]');

    I.amOnPage('/#/favorite');
    I.wait(1)
    I.seeElement('#grid-container-1');

    I.dontSee('No Restaurant Favorited');
    I.seeElement('.card');
});

Scenario('Test Unliking', ({ I }) => {
    I.amOnPage('/#/favorite');
    I.wait(1)
    I.seeElement('#grid-container-1');
    I.see('No Restaurant Favorited');
    I.dontSeeElement('.card');

    I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
    I.seeElement('#post-contain');
    I.wait(1);
    I.seeElement('#outer-like');

    I.seeElement('[aria-label="like this restaurant"]');
    I.dontSeeElement('[aria-label="unlike this restaurant"]');

    //Liking Restaurant
    I.click('#outer-like');

    I.seeElement('[aria-label="unlike this restaurant"]');
    I.dontSeeElement('[aria-label="like this restaurant"]');

    I.amOnPage('/#/favorite');
    I.wait(1)
    I.seeElement('#grid-container-1');
    I.dontSee('No Restaurant Favorited');
    I.seeElement('.card');

    I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
    I.seeElement('#post-contain');
    I.wait(1);
    I.seeElement('#outer-like');

    I.seeElement('[aria-label="unlike this restaurant"]');
    I.dontSeeElement('[aria-label="like this restaurant"]');

    //unliking Restaurant
    I.click('#outer-like');

    I.seeElement('[aria-label="like this restaurant"]');
    I.dontSeeElement('[aria-label="unlike this restaurant"]');

    I.amOnPage('/#/favorite');
    I.wait(1)
    I.seeElement('#grid-container-1');
    I.see('No Restaurant Favorited');
    I.dontSeeElement('.card');
});


