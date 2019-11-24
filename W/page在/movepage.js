//<script type="text/javascript">
$(document).ready(function() {
	$('a').click(function(e) {
		e.preventDefault();
		$('#p1').toggleClass('move');
		$('#p2').toggleClass('move');
	});
});
//</script>
