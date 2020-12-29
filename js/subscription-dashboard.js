// HOLDS THE SETTINGS AND COLORS FOR THE GRAPH BEING DISPLAYED

  var div1 = document.getElementById('jan');// vertical divs/bars for the graph
  var div2 = document.getElementById('feb');
  var div3 = document.getElementById('mar');
  var div4 = document.getElementById('apr');
  var div5 = document.getElementById('may');
  var div6 = document.getElementById('jun');
  var div7 = document.getElementById('jul');
  var div8 = document.getElementById('aug');
  var div9 = document.getElementById('sep');
  var div10 = document.getElementById('oct');
  var div11 = document.getElementById('nov');
  var div12 = document.getElementById('dec');
  var view_graph_button = document.getElementById('view_graph_button');
  var reset_graph_button = document.getElementById('reset_graph_button');

  var bars = [];
  var january = {month: 'january', subs: 40};// numbers and month for each div/bar
  var february ={month: 'february', subs: 10};
  var march = {month: 'march', subs: 100};
  var april = {month: 'april', subs: 65};
  var may = {month: 'may', subs: 75};
  var june = {month: 'june', subs: 120};
  var july = {month: 'july', subs: 121};
  var august = {month: 'august', subs: 175};
  var september = {month: 'september', subs: 220};
  var october = {month: 'october', subs: 275};
  var november = {month: 'nivember', subs: 300};
  var december = {month: 'december', subs: 15};

  bars.push(january);// adds each months info to the array of bars
  bars.push(february);
  bars.push(march);
  bars.push(april);
  bars.push(may);
  bars.push(june);
  bars.push(july);
  bars.push(august);
  bars.push(september);
  bars.push(october);
  bars.push(november);
  bars.push(december);

  function viewGraph(){// on click displays the bars for the graph
    var pos = -290;
    var id = setInterval(frame, 1);

    function frame(){// adds animation to each bar
      for(var x = 0; x < bars.length; x++){
        var barHeight = bars[x].subs;
      }
      if(pos == barHeight){// brings all bars to zero
        clearInterval(id);
      }
      else{// adds heigth to each bar
        pos++;
        div1.style.height = pos +(bars[0].subs -15) +'px';
        div2.style.height = pos +(bars[1].subs -15) +'px';
        div3.style.height = pos +(bars[2].subs -15) +'px';
        div4.style.height = pos +(bars[3].subs -15) +'px';
        div5.style.height = pos +(bars[4].subs -15) +'px';
        div6.style.height = pos +(bars[5].subs -15) +'px';
        div7.style.height = pos +(bars[6].subs -15) +'px';
        div8.style.height = pos +(bars[7].subs -15) +'px';
        div9.style.height = pos +(bars[8].subs -15) +'px';
        div10.style.height = pos +(bars[9].subs -15) +'px';
        div11.style.height = pos +(bars[10].subs -15) +'px';
        div12.style.height = pos +(bars[11].subs -15) +'px';
      }
    }
  }

  function clearGraph(){// on click removes the bars for the graph
    var pos = 0;
    var id = setInterval(frame, 1);

    function frame(){// adds animation to each bar
      for(var x = 0; x < bars.length; x++){
        var barHeight = bars[x].subs;
      }
      if(pos == barHeight){// brings all bars to zero
        clearInterval(id);
      }
      else{// removes heigth from each bar
        pos--;
        div1.style.height = pos +bars[0].subs +'px';
        div2.style.height = pos +bars[1].subs +'px';
        div3.style.height = pos +bars[2].subs +'px';
        div4.style.height = pos +bars[3].subs +'px';
        div5.style.height = pos +bars[4].subs +'px';
        div6.style.height = pos +bars[5].subs +'px';
        div7.style.height = pos +bars[6].subs +'px';
        div8.style.height = pos +bars[7].subs +'px';
        div9.style.height = pos +bars[8].subs +'px';
        div10.style.height = pos +bars[9].subs +'px';
        div11.style.height = pos +bars[10].subs +'px';
        div12.style.height = pos +bars[11].subs +'px';
      }
    }
  }

  window.onload = function(){// loads button clicks to the page
    view_graph_button.addEventListener('click', viewGraph);
    reset_graph_button.addEventListener('click', clearGraph);
  }
