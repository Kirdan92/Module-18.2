var movies = [
	{
		id: 1,
		title: 'Harry Potter i Kamień Filozoficzny',
		desc: 'W dniu jedenastych urodzin Harry dowiaduje się, że jest czarodziejem. Czeka na niego szkoła magii pełna tajemnic. ',
		img: 'https://charliederry.files.wordpress.com/2001/04/philostone.jpg?w=1013'
	},
	{
		id: 2,
		title: "Król Lew",
		desc: 'Animacja opowiadająca historię króla sawanny',
		img: 'https://i.pinimg.com/originals/3f/91/74/3f9174c6b303e839c6526c3a175d7af9.jpg'
	},
	{
		id: 3,
		title: "Władca Pierścieni: Drużyna Pierścienia",
		desc: 'Podróż hobbita z Shire i jego ośmiu towarzyszy, której celem jest zniszczenie potężnego pierścienia pożądanego przez Czarnego Władcę - Saurona.',
		img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29_theatrical_poster.jpg'
	},
	{
		id: 4,
		title: "Władca Pierścieni: Powrót Króla",
		desc: 'Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.',
		img: 'https://images-na.ssl-images-amazon.com/images/I/91%2Bni21hctL._SL1448_.jpg'
	},
	{
		id: 5,
		title: "Avengers: Endgame",
		desc: 'No description yet',
		img: 'https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg'
	}
];


var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},

	render: function () {
		return (
			React.createElement('h2', {}, this.props.title)
		);
	}

});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		);
	}
});

var MoviePoster = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('img', {src: this.props.img})
		);
	}
})


var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MoviePoster, {img: this.props.movie.img}),
			)	
		);
	}
});


var moviesElements = movies.map(function(movie) {
	return React.createElement(Movie, {key: movie.id, movie: movie});
});

var MoviesList = React.createClass({
	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Lista filmów'),
				React.createElement('ul', {}, moviesElements)
			)	
		);
	}
});

var element = React.createElement(MoviesList, {});

ReactDOM.render(element, document.getElementById('app'));