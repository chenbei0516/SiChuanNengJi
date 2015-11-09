/**
 * Created by 37DU on 2015/11/4.
 */

/*$(document).ready(function(){
    var $nav_a=$('nav ul a');
    for(var i=0;i<$nav_a.length;++i)
    {
        $nav_a.eq(i).width()+32;
       // $nav_a.eq(i).css("backgroundImage","url(../images/nav_cur_bg.gif)");
    }
});*/


//window.onload=function ()
//{
    var oSliderImg=document.getElementById('slider_img');
    var oPrevBtn=document.getElementsByClassName('prev_img');
    var oNextBtn=document.getElementsByClassName('next_img');
    var i=0;
    oPrevBtn.onclick=function(){
        if(i<4&&i>0){
            --i;
        }
        else if(i==0)
        {
            i=4;
        }
        oSliderImg.firstElementChild.src='images/slider'+ i.toString()+'.jpg';
    }
    oNextBtn.onclick=function(){
        if(i<4&&i>=0){
            ++i;
        }
        else if(i==4)
        {
            i=0;
        }
        oSliderImg.firstElementChild.src='images/slider'+ i.toString()+'.jpg';
    }
//};