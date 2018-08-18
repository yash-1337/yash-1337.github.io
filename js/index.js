$('body').scrollspy({
	target: "#navbar",
	offset: 350
});

$("#navbar a").on('click', function(event) {

	if (this.hash !== "") {

		event.preventDefault();

		let hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top + 1
		}, 800);

	}

});

function changeNavStyle() {
	let scroll_pos = $(document).scrollTop();

	if (scroll_pos >= $(window).height() - $('#navbar').height() - 5) {
		$('#navbar').addClass('bg-light nav-btm');
	} else {
		$('#navbar').removeClass('bg-light nav-btm');
	}
}

$(document).ready(() => {
	changeNavStyle();
})

$(window).scroll(() => {
	changeNavStyle();
});

let clicked_down_arrow = false;


$("#scroll-down-div").hover(() => {
		$('#scroll-down-icon').animate({
			'font-size': "28px",
			'top': '5px'
		}, 200);

		if (!clicked_down_arrow) {
			$('#scroll-down-icon').removeClass('animated infinite fadeInDown');
		}

	},
	() => {
		$('#scroll-down-icon').animate({
			'font-size': "18px",
			'top': '10px'
		}, 200);
		if (!clicked_down_arrow) {
			$('#scroll-down-icon').addClass('animated infinite fadeInDown');
		}
	});

$("#scroll-down-div").click(() => {
	$('html, body').animate({
		scrollTop: $('#about-me').offset().top
	}, 800);
	$('#scroll-down-icon').removeClass('animated infinite fadeInDown');

	clicked_down_arrow = true;
});

function diff_years(dt2, dt1) {

	let diff = (dt2.getTime() - dt1.getTime()) / 1000;
	diff /= (60 * 60 * 24);
	return Math.abs(Math.round(diff / 365.25));

}

let age = diff_years(new Date(), new Date('April 19, 2003'));

$('#about-me-main').text(`Hey, there! My name is Yash Patel. I'm an aspiring programmer and a full-time nerd. I'm currently ${age} years old, and I have been programming since I was 11. I am well versed in HTML, CSS, and Javascript, and I am able to make modern, responsive websites. I am familiar with full stack technology such as the MEAN stack and the MERN stack. I am able to make simple back-end technology using Express and MongoDB. I am also familiar with Angular, React, and Vue. I can also write Java and Python code. I am currently spending my time learning about Machine Learning, Deep Learning, and AI. I have worked with Tensorflow, Keras, and Pytorch in Python to develop different neural network architectures and train them for various uses. I am currently pursuing a career in the field of AI and Deep Learning.`);

$('#email-card').click(() => {
	window.location.href = 'mailto:yash.patel0419@gmail.com';
});


$('#send-message-btn').click(() => {
	$('#message-card').removeClass('animated shake');
	$('#form-alert-missing-input').fadeOut();
	$('#form-alert-invalid-email').fadeOut();

	let name = $('#name-input').val();
	let email = $('#email-input').val();
	let message = $('#message-box').val();

	let emailRegex = /\S+@\S+\.\S+/;

	if (name === '' || email === '' || message === '') {
		$('#message-card').addClass('animated shake');
		$('#form-alert-missing-input').fadeIn();
	} else if (!emailRegex.test(email)) {
		$('#message-card').addClass('animated shake');
		$('#form-alert-invalid-email').fadeIn();
	} else {
		Email.send(
			'no-reply@yash-1337.github.io',
			"yash.patel0419@gmail.com",
			`Message from ${name}`,
			`Name: ${name} Email: ${email} Message: ${message}`, {
				token: "8c1c1709-f722-4d4c-97dd-907fb0c78904",
				callback: () => {
					$('#form-alert-email-sent').fadeIn();
					let name = $('#name-input').val('');
					let email = $('#email-input').val('');
					let message = $('#message-box').val('');
				}
			},
		);

	}

});

$('#close-missing-input-alert').click(() => {
	$('#message-card').removeClass('animated shake');
	$('#form-alert-missing-input').fadeOut();
});

$('#close-invalid-email-alert').click(() => {
	$('#message-card').removeClass('animated shake');
	$('#form-alert-invalid-email').fadeOut();
});

$('#close-email-sent-alert').click(() => {
	$('#message-card').removeClass('animated shake');
	$('#form-alert-email-sent').fadeOut();
});
