<template lang="html">
    <div>
        <div class="mid">
            <h2>Typingbox.js</h2>
            <hr>
            <p>A jquery plugin simulating typing effect</p>
            <div class="wrap">
                <div>I'm a <span class="typing-box"></span></div>
            </div>
            <p>For more details please move <a href="https://github.com/mvplang/background-movingcircle">here</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loiter',
    data() {
        return{}
    },
    mounted () {
        (function($){

            var delay_after_typing, typing_interval, interval_for_word, keep_final_word, cursor_interval, delay, infinite, contents, word_times;

            $.fn.typingBox = function(options) {

                return this.each(function(){

                    var $typing_box = $(this);

                    var defaults = {
                        delay_after_typing : 7, //how many times of typing_interval
                        typing_interval : 100,
                        interval_for_word : 1500,
                        keep_final_word : true,
                        cursor_interval : 500,
                        delay : 1000, //when to begin typing
                        infinite : true,
                contents : ["Hi there!", "This is typingbox.js", "Let's rock!"]
                    }

                    var opt = $.extend({},defaults,options);

                    var methods = {
                        setCursor: function(){
                            //set cursor
                            var visible_flag = true;
                            $typing_box.after("<span class='box-cursor'>|</span>");
                            setInterval(function(){
                                if(visible_flag) {
                                    $(".box-cursor").css("opacity",0);
                                    visible_flag = false;
                                } else {
                                    $(".box-cursor").css("opacity","0.9");
                                    visible_flag = true;
                                }
                            },opt.cursor_interval);					
                        },
                        typingWord: function(word,isKeep) {
                        var index = 0;
                        var typing_finish = false;
                        var remove_finish = false;
                        var counter = 0;
                        setInterval(function(){
                            //typing
                            if(index < word.length && !typing_finish) {
                            $(".typing-box").text(word.slice(0,index+1));
                            index++;
                            } else {
                            typing_finish = true;
                            //don't cross out
                            if(isKeep) {
                                clearInterval(this);
                            }
                            //remove
                            if(!isKeep && typing_finish && index>0) {
                                    if(counter <= opt.delay_after_typing) {
                                counter++;
                            } else {
                                index--;
                            }
                                $(".typing-box").text(word.slice(0,index));
                            } else {
                                clearInterval(this);
                            }
                            }
                            
                        },opt.typing_interval)
                        },
                        showWords:function(word,time,isKeep) {
                            setTimeout(function(){
                            //alert(time);
                            methods.typingWord(word,isKeep);
                            },time) 
                        },
                        init:function(){
                    var target_contents = opt.contents;
                    //alert(opt.contents)
                            word_times = [opt.delay];
                            var time = opt.delay;
                            for(var i=0;i<opt.contents.length;i++) {
                    
                                var word = opt.contents[i];
                                time += word.length*opt.typing_interval+opt.delay_after_typing*opt.typing_interval+word.length*opt.typing_interval+opt.interval_for_word;
                                word_times.push(time);
                            }

                            for(var i=0;i<word_times.length-1;i++) {
                                var isKeep = false;
                                if(i==opt.contents.length-1) 
                                isKeep = opt.keep_final_word;
                                methods.showWords(opt.contents[i],word_times[i],isKeep);

                            }
                            if(opt.infinite) {
                                setTimeout(function(){
                                    methods.init();
                                },word_times[word_times.length-1])
                            }

                        }
                    } //method end
                    methods.setCursor();
                    methods.init();


                })
            }//
        })(jQuery);
        
        var options = {
            delay_after_typing : 10, //how many times of typing_interval
            typing_interval : 100,
            interval_for_word : 2000,
            keep_final_word : false,
            cursor_interval : 400,
            delay : 1000, //when to begin typing
            infinite : true,
            contents : ["Designer","Developer", "Software Engineer","Please contact me!"]
        }

        $(".typing-box").typingBox(options);
    },
    methods: {},
    components: {}
}
</script>

<style lang="css" scoped>
    
    .mid{
        position: absolute;
        margin-left: 100px;
        margin-right: 100px;
        left: 0;
        right: 0;
    }

    .wrap {
        font-family: "Helvetica Neue";
        font-size: 1.1em;
        margin: 1em 2em 1em;
    }

    .typing-box {
        color:#a45224;
        font-size: 1.2em;
        font-weight:100;
    }

    .box-cursor {
        color:#a45224;
        font-size: 1.2em;
        font-weight:100;
        margin-left:.1em;
        transition: opacity .25s ease-in;
    }

    p{
        font-size: 16px;
        color: #111;
    }
</style>