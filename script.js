$(document).ready(function(){    
    var theday = new Date();
    var yearnow = theday.getFullYear();
    var monthnow = theday.getMonth();
    var today = theday.getDate();
    var year1 = yearnow;
    var month1 = monthnow+1;
    var monthfirst = new Date(year1,month1-1,1);
    var firstday = monthfirst.getDay();
    var monthend = new Date(year1,month1,0);
    var dayscount = monthend.getDate();
    var lastmonth = new Date(year1,month1-1,0);
    var dayscount2 = lastmonth.getDate();
    $("#year").text(year1);
    $("#month").text(month1);
    for(i = 0;i < 6;i++){
        for(k = 0;k < 7;k++){
            id = i*7 + k;
            date_str = id - firstday + 1;
            if(date_str <= 0){
                a = date_str + dayscount2;
                $("td:eq("+id+")").text(a);
                $("td:eq("+id+")").addClass('notmonthnow');
            } else if( date_str > 0 && date_str <= dayscount){
                $("td:eq("+id+")").text(date_str);
                if(date_str == today){
                    $("td:eq("+id+")").addClass('today');
                }else if(id%7 == 6 || id%7 == 0){
                    $("td:eq("+id+")").addClass('weekend');
                }
            } else if( date_str > dayscount){
                b = date_str - dayscount;
                $("td:eq("+id+")").text(b);
                $("td:eq("+id+")").addClass('notmonthnow');
            }; 
        };
    };
});
$(document).ready(function(){
    $(".lm").click(function(){
        $('td').each(function(){
            $(this).removeClass('today');
            $(this).removeClass('notmonthnow');
            $(this).removeClass('weekend');
        });
        var year1 = $("#year").text();
        var month1 = $("#month").text()-1;
        var monthfirst = new Date(year1,month1-1,1);
        var firstday = monthfirst.getDay();
        var monthend = new Date(year1,month1,0);
        var dayscount = monthend.getDate();
        var lastmonth = new Date(year1,month1-1,0);
        var dayscount2 = lastmonth.getDate();
        if(month1==0){
            year1 = year1 -1 ;
            month1 = 11;
        };
        $("#year").text(year1);
        $("#month").text(month1);
        for(i = 0;i < 6;i++){
          for(k = 0;k < 7;k++){
            id = i*7 + k;
            date_str = id - firstday + 1;
            if(date_str <= 0){
                a = date_str + dayscount2;
                $("td:eq("+id+")").text(a);
                $("td:eq("+id+")").addClass('notmonthnow');
            } else if( date_str > 0 && date_str <= dayscount){
                if(id%7 == 6 || id%7 == 0){
                    $("td:eq("+id+")").text(date_str);
                    $("td:eq("+id+")").addClass('weekend');
                }else {
                    $("td:eq("+id+")").text(date_str);
                };
            } else if( date_str > dayscount){
                b = date_str - dayscount;
                $("td:eq("+id+")").text(b);
                $("td:eq("+id+")").addClass('notmonthnow');
            }; 
        };
    };
    }); 
});

$(document).ready(function(){
    $(".nm").click(function(){
        $('td').each(function(){
            $(this).removeClass('today');
            $(this).removeClass('notmonthnow');
            $(this).removeClass('weekend');
        });
        var year1 = $("#year").text();
        var month1 = parseInt($("#month").text())+1;
        var monthfirst = new Date(year1,month1-1,1);
        var firstday = monthfirst.getDay();
        var monthend = new Date(year1,month1,0);
        var dayscount = monthend.getDate();
        var lastmonth = new Date(year1,month1-1,0);
        var dayscount2 = lastmonth.getDate();
        if(month1==13){
            year1 = ++year1;
            month1 = 1
        };
        $("#year").text(year1);
        $("#month").text(month1);
        for(i = 0;i < 6;i++){
        for(k = 0;k < 7;k++){
            id = i*7 + k;
            date_str = id - firstday + 1;
            if(date_str <= 0){
                a = date_str + dayscount2;
                $("td:eq("+id+")").text(a);
                $("td:eq("+id+")").addClass('notmonthnow');
            } else if( date_str > 0 && date_str <= dayscount){
                if(id%7 == 6 || id%7 == 0){
                    $("td:eq("+id+")").text(date_str);
                    $("td:eq("+id+")").addClass('weekend');
                }else {
                    $("td:eq("+id+")").text(date_str);
                };
            } else if( date_str > dayscount){
                b = date_str - dayscount;
                $("td:eq("+id+")").text(b);
                $("td:eq("+id+")").addClass('notmonthnow');
            }; 
        };
    };
    });
});
