$(function () {
	
	var container=$("#container");
	var bird=$("#bird");
	var pole=$(".pole");
	var pole_2=$("#pole_2");
	var score=$("#score");

	var speed_span=$("#speed");
	var restart_btn=$("#restart_btn");

	var container_width=parseInt(container.width());
	var container_height=parseInt(container.height());
	var pole_initial_position=parseInt(pole.css("right"));
	var pole_initial_height=parseInt(pole.height());
	var pole_initial_width=parseInt(pole.width());
	var bird_left=parseInt(bird.css("left"));
	var bird_height=parseInt(bird.height());

	var the_game;
	var anim_id;
	var pole_current_position;
	var pole_new_position;
	var speed=5;
	var pole_new_height=120;
	var bird_current_position;
	var bird_go_up=false;
	var score=0;
	var score_updated=false;
	var game_over=false;
	var c=1;
var cc=0;
var poleheight=0;
var heigh=parseInt(350-parseInt(pole_initial_height));;
var count=pole_initial_height;

	the_game=function(){

		if (collision(bird,pole_2)) {
			stop_the_game();
		}else{

		if (bird_go_up===false) {
			if(cc>=1)
			{
				move_bird_down();
			}else{
				move_bird_d();
			}
			
		
	}
	
		pole_current_position=parseInt(pole.css("right"));
		
		
		if(pole_current_position>container_width-bird_left&& score_updated===false)
		{
			score=score+1;
		
			score_updated=true;
		}
		if (pole_current_position>container_width) {
			if(c%2==0){
				poleheight=(350-parseInt(pole_initial_height+pole_new_height));
				heigh=parseInt(poleheight);
			pole_2.css("height",pole_initial_height+pole_new_height);
		}else{
			poleheight=(350-parseInt(pole_initial_height-50));
			heigh=parseInt(poleheight);
		pole_2.css("height",pole_initial_height-50);	
		}
			speed=speed+1;
			speed_span.text(speed);
			pole_current_position=pole_initial_position;
			score_updated=false;
			c++;
		}
		pole_new_position=pole_current_position + speed;
		pole.css("right",pole_new_position);
		anim_id=requestAnimationFrame(the_game);
}
};



	anim_id=requestAnimationFrame(the_game);

	
	function move_bird_down(){

				bird.css("top",heigh);

		
	}
	function move_bird_d(){
		bird.css("bottom",0);
		
	}
	function move_bird_up(){
		bird.css("top",350);
		bird_go_up=requestAnimationFrame(move_bird_up);
				cc++;
	}

	$(document).on("keydown",function(e){
		var key=e.keyCode;
		if (key==37) {
		cancelAnimationFrame(bird_go_up);
			bird_go_up=false;
		}
		
	});
	$(document).on("keyup",function(e){
		var key=e.keyCode;
		
			if( bird_go_up===false){
			bird_go_up=requestAnimationFrame(move_bird_up);
	}

	});




















	function stop_the_game(){
		game_over=true;
		cancelAnimationFrame(anim_id);
	}
	restart_btn.click(function(){
		location.reload();
	});
});