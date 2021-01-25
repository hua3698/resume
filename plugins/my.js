AOS.init();
const wow = new WOW();
wow.init();

const w = new WOW({
    boxClass: 'fill', // 欲套用wow.js的class (預設wow)
});
w.init();

// portfolio
$("#all").addClass("underline")

$(".btn").on("click",function () {
    $(".btn").removeClass('underline')
    $(this).addClass("underline")

    let btn = this.id
    if (btn == 'all') {
        // console.log("aa")
        $(".pic").fadeIn(2000)
    } else {
        $(".pic").not("." + btn).slideUp(1000)
        $("." + btn).fadeIn(2000);
    }
})

$(".pic").on("click",function(){
    $("#filter").fadeIn()
    $("#content").animate({
        width:"60%",
        height:"60%"
    },800)
    changeText($(this))
})

$("#filter").not("#content").on("click",function(){
    $("#content").animate({
        width:"0%",
        height:"0%"
    },800)
    $("#filter").fadeOut()
})

function changeText(e){
    console.log(e.parents())
    let img=e.parent(".mid").siblings("img").attr('src');
    let h4=e.siblings("h4").html();
    let h6=e.siblings("h6").html();
    let p=e.siblings("p").html();

    $("#filter img").attr('src',img);
    $("#filter h4").html(h4);
    $("#filter h6").html(h6);
    $("#filter p").html(p);
}