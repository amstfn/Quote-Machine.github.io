const colors = ["rgb(102, 51, 153)", "green", "rgb(51, 83, 153)", "brown", "orange", "rgb(153, 144, 51)", "#862525", "rgb(51, 153, 117)", "rgb(51, 114, 153)", "rgb(149, 39, 157)"];

const quotes = [
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        author: " Mark Twain"
    },
    {
        quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        author: "Anne Frank"
    },
    {
        quote: "You may be disappointed if you fail, but you are doomed if you don’t try.",
        author: " Beverly Sills"
    },
    {
        quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
        author: " Bill Cosby"
    },
    {
        quote: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
        author: "Maimonides"
    },
    {
        quote: "There are no traffic jams along the extra mile.",
        author: "Roger Staubach"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        author: "Christopher Columbus"
    },
    {
        quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        author: "Christopher Columbus"
    },
    {
        quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        author: "Aristotle"
    }
]

let randomIndex = Math.round(Math.random() * 9);

$(document).ready(function () {

    $("#text").text(`“${quotes[randomIndex].quote}`);
    $("#author").text(`-${quotes[randomIndex].author}`);

    $("#new-quote").click(function () {

        randomIndex = Math.round(Math.random() * 9);

        $("#text").fadeTo(300, 0, function () {
            $(this).text(`“${quotes[randomIndex].quote}`).fadeTo(300, 1);
        });
        $("#author").fadeTo(300, 0, function() {
            $(this).text(`-${quotes[randomIndex].author}`).fadeto(300, 1);
        })

        $(".wrapper").animate({
            backgroundColor: colors[randomIndex]
        }, 1000);
        $(".backgroundColor").animate({
            backgroundColor: colors[randomIndex]
        }, 1000);
        $(".color").animate({
            color: colors[randomIndex]
        }, 1000)
    });
    
    $("#tweet-quote").click(function () {
        const encodedQuote = encodeURIComponent(quotes[randomIndex].quote);
        const encodedAuthor = encodeURIComponent(quotes[randomIndex].author);

        // Update the Twitter button's href attribute
        const twitterUrl = `https://twitter.com/intent/tweet?text=“${encodedQuote} -${encodedAuthor}"`;
        $("#tweet-quote").attr("href", twitterUrl);
    });
    $("#telegram").click(function () {
        const encodedQuote = encodeURIComponent(quotes[randomIndex].quote);
        const encodedAuthor = encodeURIComponent(quotes[randomIndex].author);

        const telegramURL = `https://t.me/share/url?url=${encodedQuote}%0A-${encodedAuthor}`;
        $("#telegram").attr("href", telegramURL);
    })
});
