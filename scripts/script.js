$(document).ready(function() {

  var randomQ = '';

  getQuote();

function getQuote() {

  var quotes = [
              { quote: 'Belief creates the actual fact', cite: 'William James' },
              { quote: 'To fail to love is not to exist at all', cite: 'Mark Van Doren' },
              { quote: 'There cannot be a crisis next week, My schedule is already full', cite: 'Henry Kissinger' },
              { quote: 'Life is but tought', cite: 'Sara Teasdale' },
              { quote: 'Innovation distinguishes between a leader and a follower', cite: 'Steve Jobs' },
              { quote: 'My favorite things in life dont cost any money, Its really clear that the most precious resources we all have is time', cite: 'Steve Jobs'},
              { quote: 'I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.', cite: 'Winston Churchill' },
              { quote: 'Happiness is having a large, loving, caring, close-knit family in another city', cite: 'George Burns' },
              { quote: 'Behind every great man is a woman rolling her eyes', cite: 'Jim Carrey' },
              { quote: 'No man has a good enough memory to be a successful liar', cite: 'Abraham Lincoln' },
              { quote: 'The problem is not the problem; the problem is your attitude about the problem', cite: 'Captain Jack Sparrow' },
              { quote: 'In the end, its not the years in your life that count. its the life in your years.', cite: 'Abraham Lincoln' },
              { quote: 'Nearly all men can stand adversity, but if you want to test a mans character, give him power.', cite: 'Abraham Lincoln' },
              { quote: 'Better to remain silient and be thought a fool than to speak out and remove all doubt', cite: 'Abraham Lincoln' },
              { quote: 'Service to others is the rent you pay for your room here on earth', cite: 'Muhammad Ali' },
              { quote: 'The man who has no imagination has no wings', cite: 'Muhammad Ali' },
              { quote: 'Age is whatever ou think it is. You are as old as you think you are.', cite: 'Muhammad Ali' },
              { quote: 'We need to internalize this idea of excellene. Not many folks spend a lot of time trying to be excellent. Barack Obama' },
              { quote: 'The wisest use of American strength is to advance freedom.', cite: 'George W. Bush' },
              { quote: 'Some folks look at me and see a certain swagger, which in Texas is called walking.', cite: 'George W. Bush' },
              { quote: 'I have written a book.  This will come as quite a shock to some. They didn\'t think I could read, much less write.',cite: 'George W. Bush' },
              { quote: 'As we look ahead into the next century, leaders will be those who empower others', cite: 'Bill Gates' },
              { quote: 'Everybody wants to go to Heaven, but no one wants to die to get there!', cite: 'B.B. King' },
              { quote: 'Be at war with your vices, at peace with your neighbors, and let every new year find you a better man.', cite: 'Benjamin Franklin' },
              { quote: 'Lost time is never found again.', cite: 'Benjamin Franklin' },
              { quote: 'Wine is constant proof that God loves us and loves to see us happy.', cite:'Benjamin Franklin' },
              { quote: 'We are all born ignorant, but one must work hard to remain stupid.', cite: 'Benjamin Franklin' },
              { quote: 'We are what we believe we are.', cite: 'C.S. Lewis' },
              { quote: 'Today you are you! That is truer than true! There is no one alive who is you-er than you!', cite: 'Dr. Seuss' },
              { quote: 'I like nonsense, it wakes up the brain cells., Dr. Seuss' },
              { quote: 'The more you read, the more things you will know. The more that you learn, the more places youll go.', cite: 'Dr. Seuss' },
              { quote: 'Cock your hat - angles are attitudes.', cite: 'Frank Sinatra' },
              { quote: 'Alcohol may be a mans worst enemy, but the Bible says love your enemy.', cite: 'Frank Sinatra' },
              { quote: 'Progress is impossible without change, and those who cannot change their minds cannot change anything.', cite: 'George Bernard Shaw' },
              { quote: 'Just do what must be done. This may not be happiness, but it is greatness.', cite: 'George Bernard Shaw' },
              { quote: 'Success does not consist in neer aking mistakes but in never making the same one a second time.', cite: 'George Bernard Shaw' },
              { quote: 'Marriage is an alliance entered into by a man who can\'t sleep with the window shut, and a woman who can\'t sleep with the window open.', cite: 'George Bernard Shaw' },
              { quote: 'Silence is a source of great strength.', cite: 'Lao Tzu' },
              { quote: 'When you arise in the morning, think of what a precious privilege it is to be alive -to breathe, to think, to enjoy, to love.', cite: 'Marcus Aurelius' },
              { quote: 'The weak can never forgive. Forgiveness is the attribute of the strong.', cite: 'Mahatma Gandhi' },
              { quote: 'You must be the change you wish to see in the world.', cite: 'Mahatma Gandhi' },
              { quote: 'The secret of getting ahead is getting started.', cite: 'Mark Twain' },
              { quote: 'Get your facts first, then you can distort them as you please.', cite: 'Mark Twain' },
              { quote: 'Don\'t let schooling interfere with your education.', cite: 'Mark Twain' },
              { quote: 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.', cite: 'Mark Twain' },
              { quote: 'A nickel ain\'t worth a dime anymore.', cite: 'Yogi Berra' },
              { quote: 'Little League baseball is a very good thing because it keeps the parents off the streets.', cite: 'Yogi Berra' },
              { quote: 'You are never to old to set another goal or to dream a new dream.', cite: 'C.S. Lewis'}
            ];

            randomQ = Math.floor(Math.random()*quotes.length);
            $('p', '.quote').text(quotes[randomQ].quote);
        $('cite', '.quote').text(quotes[randomQ].cite);
          }
         $('.btnQuote').click(function(){
           getQuote();
         });

});
