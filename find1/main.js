/**
 * Created by Myron on 2017/6/28.
 */
$(document).ready(function () {
    ajaxGetData();
    $("#rePort").click(function () {
        ajaxGetData()
    })

    function ajaxGetData() {
        $.ajax({
            url:"./data.json",
            type:"GET",
            success:reset
        })
    }

    /*解析数据*/
    function reset(data) {
        var str = "";
        for(var x in data){
            str += "<li>"+
                "<h1>"+data[x].ques+"</h1>"+
                "<div class='anser_item'>";
            for(var y in shuffle(data[x].ans)){
                var letter;
                if(y==="0"){
                    letter="A"
                }else if(y==="1"){
                    letter="B"
                }else if(y==="2"){
                    letter="C"
                }else {
                    letter="D"
                }
                str+="<p>" +
                    "<label>" +
                    "<input type='radio' name="+data[x].radioName+">" +
                    "</label>" +
                    "<b>"+letter+"."+"</b>" +
                    "<span data-isTrue="+data[x].ans[y].isTrue+">"+data[x].ans[y].ansText+"</span>" +
                    "</p>"
            }
            str+=       "</div>"
                +"</li>"
        }
        $(".anser_box").children("ul").html(str);
        var ansSpan = $(".anser_box").find("span");
        $("#visibTrue").click(function () {
            checkTrue(ansSpan);
        })
    }

    /*随机排序*/
    function shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    };

    //检查正确答案
    function checkTrue(ele) {
        for(var i = 0;i<ele.length;i++){
            if(ele[i].dataset["istrue"]==="1"){
                $(ele[i]).css({
                    "font-weight":"700",
                    "color":"#4FFF00"
                });
                $(ele[i]).siblings("b").css({
                    "color":"#4FFF00"
                });
                $(ele[i]).siblings("label").find("input").attr("checked","");
            }
        }
    }
})