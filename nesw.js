$(function (){
    let type = 1;//0 nesw    1 东南西北
    let arr = [
        ['N','E','S','W'],
        ['北','东','南','西']
    ];
    let start_time = 0;
    let all_time = 0;
    let number = 0;

    function init() {
        number = Math.floor(Math.random()*4);
        $(".box>.middle>.text").html(arr[type][number]);
        $(".box>.time").html("");

        start_time = new Date().getTime();
        all_time = 0;
    }

    function end(answer) {
        if(start_time == 0){return false;}

        all_time = new Date().getTime() - start_time;
        if(number == answer){
            $(".box>.time").html("用时："+all_time+"ms");
        }else{
            $(".box>.time").html("错了！");
        }
        start_time = 0;
    }


    //开始
    $(".btn>a.start").click(function () {init();});

    $(".box>.middle>a").click(function (){
        end(Number($(this).data("answer")));
    })

    $(".box .type>.text").click(function (){
        type = Number($(this).data("type"));
        $(".box .type>.text").removeClass("active");
        $(this).addClass("active");

    })
})