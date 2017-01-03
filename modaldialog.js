(function($){

$divoverlay = null;

$.Modaldialog= function(options){

	var settings=$.extend({width:'500px',height:'500px',title:"My New Plugin"},options);

	$divoverlay=$("<div></div>").appendTo("body");
	$divoverlay.prop("id","modaldialogid");

	$divoverlaycontainer=$("<div></div>").appendTo("body");
	$divoverlaycontainer.prop("id","modaldialogcontainerid");
	$divoverlaycontainer.css("height",settings.height);
	$divoverlaycontainer.css("width",settings.width);

	$divoverlaycontainertitle=$("<div></div>").appendTo($divoverlaycontainer);
	$divoverlaycontainertitle.prop("id","modaldialogcontainertitle");
	$divoverlaycontainertitle.html(settings.title)

	$divoverlaycontainerclose=$("<div></div>").appendTo($divoverlaycontainertitle);
	$divoverlaycontainerclose.prop("id","modaldialogcontainerclose");
	$divoverlaycontainerclose.html("X");
	$divoverlaycontainerclose.on("click",function(){
		// close the dialog
		$.Modaldialog.Close();

	})

	$divoverlaycontainercontent=$("<div></div>").appendTo($divoverlaycontainer);
	$divoverlaycontainercontent.prop("id","modaldialogcontainercontent");
	

	$iframe=$("<iframe></iframe>").appendTo($divoverlaycontainercontent);
	$iframe.prop("src",settings.url);

	function centerpage(){
		console.log($(window).height(),"test11")
		console.log($(window).scrollTop(),"test123")
		$divoverlaycontainer.css("top",Math.max(0,(($(window).height() - $divoverlaycontainer.outerHeight())/2) + $(window).scrollTop())+"px");
		$divoverlaycontainer.css("left",Math.max(0,(($(window).width() - $divoverlaycontainer.outerWidth())/2) + $(window).scrollTop())+"px");
	}
	centerpage();

	$(window).on("resize",function(){
		centerpage();		
	})
}

$.Modaldialog.Close= function(){
	if($divoverlay != null){
		$divoverlaycontainer.hide(function(){
			$(this).remove();
			$divoverlay.remove();
			$divoverlay= null;
		})
	}
}

}(jQuery))