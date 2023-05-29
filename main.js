//import {getNum} from "./list_announce.js";
//const notice_num = getNum();
const numList = document.querySelectorAll(".num");
const titleList = document.querySelectorAll(".list-title");
const writerList = document.querySelectorAll(".writer");
const dateList = document.querySelectorAll(".date");

    for(let i=0; i<numList.length; i++) {
      numList[i].innerHTML = (i+1);
      titleList[i].innerHTML = "제목" + (i+1);
      writerList[i].innerHTML = "작성자" + (i+1);
      dateList[i].innerHTML = "2023.5.12";
    }

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
    });
    
    
