var theday = new Date();
    var yearnow = theday.getFullYear();
    var monthnow = theday.getMonth();
    var today = theday.getDate();
    var monthfirst = new Date(yearnow,monthnow,1);
    var firstday = monthfirst.getDay();
    var monthend = new Date(yearnow,monthnow+1,0)
    var dayscount = monthend.getDate();
    var lastmonth = new Date(yearnow,monthnow,0);
    var dayscount2 = lastmonth.getDate();
  
    
    document.write("<div id='head'>")
    document.write("<button class='lm'>上一月</button>")
    document.write("<span id='year'></span>年")
    $("#head >#year").text(yearnow)
    document.write("<span id='month'></span>月")
    $("#head >#month").text(monthnow+1)
    document.write("<button class='nm'>下一月</button>")
    document.write("</div>")
    document.write("<table><tr><th>星期日</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th><th>星期六</th></tr>");
    for(i = 0;i < 6;i++){
      document.write("<tr>");
        for(k = 0;k < 7;k++){
          id = i*7 + k;
          // if(){
          date_str = id - firstday + 1;
          // }
          if(date_str <= 0){
            a = date_str + dayscount2;
            document.write("<td class='notmonthnow'>"+ a +"</td>");
          } else if( date_str > 0 && date_str <= dayscount){
            if(date_str == today){
              document.write("<td class='today'>"+ date_str +"</td>");
            }else if(id%7 == 6 || id%7 == 0){
              document.write("<td class='weekend'>"+ date_str +"</td>");
            }else {
              document.write("<td>"+ date_str +"</td>");
            };
          } else if( date_str > dayscount){
            b = date_str - dayscount;
            document.write("<td class='notmonthnow'>"+ b +"</td>");
          }; 
        };
      document.write("</tr>");
    };
    document.write("</table>")

    $(".lm").click(function(){
      document.write("<head>")
      document.write("<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>")
      document.write("<link rel='stylesheet' type='text/css' href='stylesheet.css'/>")
      document.write("</head>")
      month1 = 6;
      year1 = 2015;

      if(month1==0){
        year=year-1; month1=11
      }else{
        month1--};


      var today = theday.getDate();
      var monthfirst = new Date(year1,month1,1);
      var firstday = monthfirst.getDay();
      var monthend = new Date(year1,month1+1,0);
      var dayscount = monthend.getDate();
      var lastmonth = new Date(year1,month1,0);
      var dayscount2 = lastmonth.getDate();

      document.write("<div id='head'>")
      document.write("<button class='lm'>上一月</button>")
      document.write("<span id='year'></span>年")
      $("#year").text(year1)
      document.write("<span id='month'></span>月")
      $("#month").text(month1+1)
      document.write("<button class='nm'>下一月</button>")
      document.write("</div>")
      document.write("<table><tr><th>星期日</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th><th>星期六</th></tr>");
      for(i = 0;i < 6;i++){
        document.write("<tr>");
          for(k = 0;k < 7;k++){
            id = i*7 + k;
            date_str = id - firstday + 1;
            if(date_str <= 0){
              a = date_str + dayscount2;
              document.write("<td class='notmonthnow'>"+ a +"</td>");
            } else if( date_str > 0 && date_str <= dayscount){
              if(id%7 == 6 || id%7 == 0){
                document.write("<td class='weekend'>"+ date_str +"</td>");
              }else {
                document.write("<td>"+ date_str +"</td>");
              };
            } else if( date_str > dayscount){
              b = date_str - dayscount;
              document.write("<td class='notmonthnow'>"+ b +"</td>");
            }; 
          };
        document.write("</tr>");
      };
      document.write("</table>")
    });

    $(".nm").click(function(){
      document.write("<head>")
      document.write("<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>")
      document.write("<link rel='stylesheet' type='text/css' href='stylesheet.css'/>")
      document.write("</head>")
      var month2 = parseInt(theday.getMonth()) + 1;
      var year2 = parseInt(theday.getFullYear());

      var today = theday.getDate();
      var monthfirst = new Date(year2,month2,1);
      var firstday = monthfirst.getDay();
      var monthend = new Date(year2,month2+1,0);
      var dayscount = monthend.getDate();
      var lastmonth = new Date(year2,month2,0);
      var dayscount2 = lastmonth.getDate();

      document.write("<button class='lm'>上一月</button>")
      document.write(year2)
      document.write("年")
      document.write(month2+1)
      document.write("月")
      document.write("<button class='nm'>下一月</button>")
      document.write("<table><tr><th>星期日</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th><th>星期六</th></tr>");
      for(i = 0;i < 6;i++){
        document.write("<tr>");
          for(k = 0;k < 7;k++){
            id = i*7 + k;
            date_str = id - firstday + 1;
            if(date_str <= 0){
              a = date_str + dayscount2;
              document.write("<td class='notmonthnow'>"+ a +"</td>");
            } else if( date_str > 0 && date_str <= dayscount){
              if(id%7 == 6 || id%7 == 0){
                document.write("<td class='weekend'>"+ date_str +"</td>");
              }else {
                document.write("<td>"+ date_str +"</td>");
              };
            } else if( date_str > dayscount){
              b = date_str - dayscount;
              document.write("<td class='notmonthnow'>"+ b +"</td>");
            }; 
          };
        document.write("</tr>");
      };
      document.write("</table>")
    });