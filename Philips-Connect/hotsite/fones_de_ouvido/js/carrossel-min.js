// Plugin Carrossel
(function(g){g.fn.carrossel=function(){function k(p){p?(h=e,b++,b>=a.length&&(b=0),0==b?(e=a.length-1,c=b+1):b==a.length-1?(e=b-1,c=0):(e=b-1,c=b+1),l(h,b,e,c,"ativo","anterior","proximo")):(h=c,b--,0>b&&(b=a.length-1),0==b?(e=a.length-1,c=b+1):b==a.length-1?(e=b-1,c=0):(e=b-1,c=b+1),l(h,b,c,e,"ativo","proximo","anterior"))}function l(b,d,e,c,f,h,j){a[d].css({"z-index":4}).animate({"margin-left":g("."+f).css("margin-left"),top:g("."+f).css("top"),width:g("."+f).css("width"),height:g("."+f).css("height")},
500).addClass(f).removeClass(j);a[e].css({"z-index":2}).animate({"margin-left":g("."+h).css("margin-left"),top:0.2*a[e].height()+"px",width:0.6*a[e].width()+"px",height:0.6*a[e].height()+"px"},500).removeClass(f).addClass(h);a[c].css({"z-index":2}).addClass(j).css({"margin-left":g("."+j).css("margin-left"),top:0.2*a[c].height()+"px",width:0.6*a[c].width()+"px",height:0.6*a[c].height()+"px"}).fadeIn(500,function(){a[c].removeClass("desativado")});a[b].css({"z-index":0}).removeClass(h).fadeOut(500,
function(){a[b].addClass("desativado").removeAttr("style")})}function m(a,b){a.addClass(b).css({"margin-left":g("."+b).css("margin-left"),top:0.2*a.height()+"px",width:0.6*a.width()+"px",height:0.6*a.height()+"px"})}var a=[],b=0,f=0,e,c,h,d,n;g(this).find("div.item").each(function(b,c){c.id="item-"+b;a.push(g("#"+c.id))});n=g("#btn-proximo");d=g("#btn-anterior");n.click(function(a){if(0==f||a.timeStamp>=f+600)f=a.timeStamp,k(!0)});d.click(function(a){if(0==f||a.timeStamp>=f+600)f=a.timeStamp,k(!1)});
for(d=b;d<a.length;d++)0==d?a[d].addClass("ativo"):1==d?(m(a[d],"proximo"),c=d):d==a.length-1?(m(a[d],"anterior"),e=d):a[d].addClass("desativado")}})(jQuery);