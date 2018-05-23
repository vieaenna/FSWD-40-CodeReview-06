var vinyl =[
	{
		Title: 'Howl',
		Type: 'Vinyl',
		Author: 'Mighty Oaks',
		Genre: 'Indie-Folk',
		Publisher: 'Universal Music',
		Image: "img/oaks.jpg",
		Description: 'Three young men, from three countries, combining three part harmonies, resulting in one unique sound.',
		Rating: 5,	
	},

	{
		Title: 'New Estate',
		Type: 'Vinyl',
		Author: 'Giant Rooks',
		Genre: 'Indie',
		Publisher: 'Haldern Pop Recordings',
		Image: "img/rooks.jpg",
		Description: 'With a sound both instantly familiar, yet idiosyncratic enough so as to remain enigmatic, the band have hit upon a deft balance of the accessible and the utterly irresistible.',
		Rating: 4, 	
	},
	]

	var books =[

	{
		Title: 'The Importance of Being Earnest',
		Type: 'Book',
		Author: 'Oscar Wilde',
		Genre: 'Comedy',
		Publisher: 'Other',
		Image: "img/earnest.jpg",
		Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa harum vitae accusantium quisquam, officia assumenda autem nemo ex dolorem veniam deserunt, suscipit expedita illum saepe molestiae cupiditate, porro consectetur. Voluptas.",
		Rating: 5,	
	},

	{
		Title: 'A Clockwork Orange',
		Type: 'Book',
		Author: 'Anthony Burgess',
		Genre: 'Novel',
		Publisher: 'William Heinemann',
		Image: "img/Clockwork.jpg",
		Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quaerat vel, quam quo ipsum sapiente explicabo dolore repellat et soluta cum ullam ut possimus animi, eos odit, esse earum maiores.",
		Rating: 5,	
	},
	]

	var comics  =[

	{
		Title: 'Understanding Comics',
		Type: 'Graphic Novel',
		Author: 'Scott McCloud',
		Genre: 'Non-Fiction',
		Publisher: 'Amazing Heroes',
		Image: "img/comics.jpg", 
		Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo enim vero assumenda numquam dignissimos, fugit eaque nesciunt. Dolorem illo, laudantium perferendis, aliquam officiis similique voluptatum eos sed odit temporibus numquam!",
		Rating: 4, 	
	},


	{
		Title: 'Palestine',
		Type: 'Graphic Novel',
		Author: 'Joe Sacco',
		Genre: 'Non-Fiction',
		Publisher: 'Fantagraphics',
		Image: "img/palestine.jpg",
		Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vitae minus, maiores explicabo ex quasi ut ullam quibusdam error, atque, earum, doloribus? Ipsum neque id, commodi eum, debitis ab numquam.",
		Rating: 4,	
	},

	]

	var series =[

	{
		Title: 'Friends',
		Type: 'Series',
		Author: 'David Crane & Marta Kauffman',
		Genre: 'Sitcom',
		Publisher: 'Warner Bros. Television',
		Image: "img/friends.jpg",
		Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolorum, quae. Laborum rerum voluptatum id, placeat aut similique, recusandae soluta, adipisci odio numquam eligendi assumenda sint perferendis, eum iusto minima!",
		Rating: 5,	
	},


	{
		Title: 'Silicon Valley',
		Type: 'Series',
		Author: 'Mike Judge',
		Genre: 'Comedy',
		Publisher: 'Warner Bros. Television',
		Image: "img/silicon.png",
		Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolorum cum ad quidem, quis ipsam aut, expedita ipsa quaerat tenetur alias dolorem omnis deserunt vitae nulla repellendus earum sint fugiat.",
		Rating: 3, 	
	},


];


// Create body and header 

document.write("<div class = \"container\">");
document.write("<div class=\"row\">");
document.write("<div id=\"Title\" class=\"col-md-12\">");
document.write("<h1 id=\"Anna\">" + "Anna's Mediathek" + "<h1>");
document.write("</div>");
document.write("</div>");


// Create individual sections (vinyl, books, comics, tv series)

// VINYL //
document.write("<h1>" + "Vinyl" + "</h1>");
document.write("<hr>");
document.write("<div id=\"vin\" class=\"row\">");

for (var i = 0; i < vinyl.length; i++) {
    document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">");
    document.write("<div class=\"vin\">");
    document.write('<img src="' + vinyl[i].Image + '">' + '<br>');
    document.write("<b>" + "Title: " + "</b>" + vinyl[i].Title + "<br>");
    document.write("<b>" + "Group: " + "</b>" + vinyl[i].Author + "<br>");
    document.write("<b>" + "Genre: " + "</b>" + vinyl[i].Genre + "<br>");
    document.write("<b>" + "Publisher: " + "</b>" + vinyl[i].Publisher + "<br>");
    document.write("Rating: ");
    for (j = 0; j < vinyl[i].Rating; j++) {
        document.write("<span>" + '&starf;' + "</span>");
    }

    // OPEN DETAILS ON CLICK //
    document.write("<br></br>");
    document.write("<div class=\"popup\">");
    document.write("<label>"+"Details"+"</label>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
}
document.write("</div>");

// BOOKS //
document.write("<h1>" + "Books" + "</h1>");
document.write("<hr>");
document.write("<div id=\"book\" class=\"row\">");

for (var i = 0; i < books.length; i++) {
    document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">");
    document.write("<div class=\"vid\">");
    document.write('<img src="' + books[i].Image + '">' + '<br>');
    document.write("<b>" + "Title: " + "</b>" + books[i].Title + "<br>");
    document.write("<b>" + "Author: " + "</b>" + books[i].Author + "<br>");
    document.write("<b>" + "Genre: " + "</b>" + books[i].Genre + "<br>");
    document.write("<b>" + "Publisher: " + "</b>" + books[i].Publisher + "<br>");
    document.write("Rating: ");
    for (j = 0; j < books[i].Rating; j++) {
        document.write("<span>" + '&starf;' + "</span>");
    }

    // OPEN DETAILS ON CLICK //
    document.write("<br></br>");
    document.write("<div class=\"popup\">");
    document.write("<label>"+"Details"+"</label>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");

}
document.write("</div>");

// COMICS
document.write("<h1>" + "Comics" + "</h1>");
document.write("<hr>");
document.write("<div id=\"mus\" class=\"row\">");

for (var i = 0; i < comics.length; i++) {

    document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">");
    document.write("<div class=\"vid\">");
    document.write('<img src="' + comics[i].Image + '">' + '<br>');
    document.write("<b>" + "Title: " + "</b>" + comics[i].Title + "<br>");
    document.write("<b>" + "Author: " + "</b>" + comics[i].Author + "<br>");
    document.write("<b>" + "Genre: " + "</b>" + comics[i].Genre + "<br>");
    document.write("<b>" + "Publisher: " + "</b>" + comics[i].Publisher + "<br>");
    document.write("Rating: ");
    for (j = 0; j < comics[i].Rating; j++) {
        document.write("<span>" + '&starf;' + "</span>");
    }

    // OPEN DETAILS ON CLICK //
    document.write("<br></br>");
    document.write("<div class=\"popup\">");
    document.write("<label>"+"Details"+"</label>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");

}

// TV SERIES
document.write("<h1>" + "TV Series" + "</h1>");
document.write("<hr>");
document.write("<div id=\"mus\" class=\"row\">");

for (var i = 0; i < series.length; i++) {

    document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">");
    document.write("<div class=\"vid\">");
    document.write('<img src="' + series[i].Image + '">' + '<br>');
    document.write("<b>" + "Title: " + "</b>" + series[i].Title + "<br>");
    document.write("<b>" + "Author: " + "</b>" + series[i].Author + "<br>");
    document.write("<b>" + "Genre: " + "</b>" + series[i].Genre + "<br>");
    document.write("<b>" + "Publisher: " + "</b>" + series[i].Publisher + "<br>");
    document.write("Rating: ");
    for (j = 0; j < series[i].Rating; j++) {
        document.write("<span>" + '&starf;' + "</span>");
    }

    // OPEN DETAILS ON CLICK //
    document.write("<br></br>");
    document.write("<div class=\"popup\">");
    document.write("<label>"+"Details"+"</label>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");

}


document.write("</div>");

document.write("</div>");


