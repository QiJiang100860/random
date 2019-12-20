/**
 * Created by Myron on 2017/6/28.
 */
$(document).ready(function () {
    ajaxGetData();
    $("#rePort").click(function () {
        ajaxGetData()
    })

    function ajaxGetData() {
        /**
         * 此处注释异步请求
         * */
        // $.ajax({
        //     url:"./data.json",
        //     type:"GET",
        //     dataType: "json",
        //     success:reset
        // })

        /**
         *
         * 此处模拟假数据代替请求完成之后的数据
         *
         * */

        var data = [
            {
                "radioName":"req1",
                "ques":"你感觉职业规划对人生有没有帮助？",
                "ans": [
                    {
                        "isTrue":"0",
                        "ansText":"有"
                    },{
                        "isTrue":"0",
                        "ansText":"没有"
                    },{
                        "isTrue":"1",
                        "ansText":"因人而异"
                    },{
                        "isTrue":"0",
                        "ansText":"从来没有想过"
                    }
                ]
            },
            {
                "radioName":"req2",
                "ques":"你觉得恋爱在大学期间是不是有必要的？",
                "ans": [
                    {
                        "isTrue":"0",
                        "ansText":"有"
                    },{
                        "isTrue":"0",
                        "ansText":"没有"
                    },{
                        "isTrue":"1",
                        "ansText":"不确定"
                    },{
                        "isTrue":"0",
                        "ansText":"为什么告诉你"
                    }
                ]
            },
            {
                "radioName":"req3",
                "ques":"你觉得你自己的生活怎么样？",
                "ans": [
                    {
                        "isTrue":"0",
                        "ansText":"不怎么样？努力买房子"
                    },{
                        "isTrue":"0",
                        "ansText":"努力赚钱"
                    },{
                        "isTrue":"1",
                        "ansText":"天天打篮球，看NBA"
                    },{
                        "isTrue":"0",
                        "ansText":"得过且过，当一天和尚撞一天钟"
                    }
                ]
            },
            {
                "radioName":"req4",
                "ques":"你对自己的评价？",
                "ans": [
                    {
                        "isTrue":"0",
                        "ansText":"开朗"
                    },{
                        "isTrue":"0",
                        "ansText":"活泼"
                    },{
                        "isTrue":"0",
                        "ansText":"够义气，朋友多"
                    },{
                        "isTrue":"1",
                        "ansText":"孝顺，上进心强"
                    }
                ]
            },
            {
                "radioName":"req5",
                "ques":"女朋友经常逛淘宝、京东、天猫，你怎么看？",
                "ans": [
                    {
                        "isTrue":"1",
                        "ansText":"女朋友被我惯得，我乐意"
                    },{
                        "isTrue":"0",
                        "ansText":"大发雷霆"
                    },{
                        "isTrue":"0",
                        "ansText":"忍了，不搭理她"
                    },{
                        "isTrue":"0",
                        "ansText":"她逛她的，我玩LOL，谁不管谁"
                    }
                ]
            }
        ]
        reset(data);
    }

    /*解析数据*/
    function reset(data) {
        var str = "";
        for(var x in shuffle(data)){
            str += "<li>"+
                "<h1>Q"+(Number(x)+1)+"."+data[x].ques+"</h1>"+
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
                    "color":"#4FFF00",
                    "font-size":"16px"
                });
                $(ele[i]).siblings("b").css({
                    "color":"#4FFF00",
                    "font-size":"16px"
                });
                $(ele[i]).siblings("label").find("input").attr("checked","");
            }
        }
    }
})