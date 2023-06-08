//import {getNum} from "./list_announce.js";
//const notice_num = getNum();
const numList = document.querySelectorAll(".num");
const titleList = document.querySelectorAll(".list-title");
const writerList = document.querySelectorAll(".writer");
const dateList = document.querySelectorAll(".date");
var scroll_state = 1;

    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      
      
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Year', '전체'],
          ['2013',  574.55],
          ['2014',  562.68],
          ['2015',  582.05],
          ['2016',  589.21],
          ['2017',  600.03],
          ['2018', 605.78],
          ['2019', 586.16]
        ]);

        var options = {
          title: '한국 co2배출량(단위:톤)',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    $(document).ready(function(){
      $("#nav").mouseenter(function(){
        $("#nav").height(200);
        $(".nav-container-in").show();
        
      });
      $("#nav").mouseleave(function(){
        $(".nav-container-in").hide();
        $("#nav").height(80);

      });
      $(function plo() {
          $("#run").animate({"left":"25%"}, 2000, function a(){
            document.getElementById("ani1").src = "image/blank.png";
          });
          $("#run").animate({"left":"68%"}, 2000, function b(){
            document.getElementById("ani2").src = "image/blank.png";
          });
          $("#run").animate({"left":"90%"}, 2000, null);
          
          $("#run").animate({"left":"0%"}, 0, function c(){
            document.getElementById("ani1").src = "image/trash2.png";
            document.getElementById("ani2").src = "image/trash2.png";
          });
          plo();
      });

      $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        //console.log(scrT); //스크롤 값 확인용
        if(scrT == $(document).height() - $(window).height()){
          //스크롤이 끝에 도달했을때 실행될 이벤트
          if(scroll_state==1) {
            $("#scroll-run").slideDown(100, null);
            $("#scroll-ani").slideDown(100, function(){
              $('html, body').scrollTop($(window).scrollTop()-1);
              scroll_state++;
            });
            
          }else if(scroll_state==2) {
            $("#scroll-run").animate({"left":"40%"}, 1000, function(){
              $('html, body').scrollTop($(window).scrollTop()-1);
              scroll_state++;
            });

          }else if(scroll_state==3){
            //document.getElementById("scroll-ani").src = "image/blank.png";
            $("#scroll-ani").slideUp(100, function(){
              $('html, body').scrollTop($(window).scrollTop()-1);
              scroll_state++;
            });
            

          }else if(scroll_state==4){
            $("#scroll-run").animate({"left":"90%"}, 1000, function(){
              document.getElementById("scroll-run").src = "image/blank.png";
              $('html, body').scrollTop($(window).scrollTop()-1);
              scroll_state++;
            });

          }else if(scroll_state==5){
            $("#finish").slideDown();
          }
          
          
        } else {
          //아닐때 이벤트없읔 
        }
      });
     

    });
    
    
