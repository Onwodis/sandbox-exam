$(document).ready(function(){
    $("#wordp").animate({width: 'toggle'},"slow");

        var custom = 'customer satisfaction| '
        var business = 'business needs| '
        var creative = 'creative ideas| '
        var k =0 

        var customL= custom.length
        var businessL= business.length
        var creativeL= creative.length
        var y ;
        var plays = custom[0]
        var playsb = business[0]
        var playsc = creative[0]
        var rt =0
        var ddlove =0
        var sarklove =0

        var array=[]
        var img;

       

    $('#chis').mouseover(function(){
        $('#chis').animate({marginTop: '-3px'})
    })
    $('#chis').mouseout(function(){
        $('#chis').animate({marginTop: '3px'})
    })
    $('#chi').mouseover(function(){
        $('#chi').animate({marginTop: '-3px'})
        
    })
    $('#chi').mouseout(function(){
        $('#chi').animate({marginTop: '3px'})
    })
    

    
    $('#guys').click(function(){
        $('#tyre').show()
        $('#chick').trigger('play')
        $('#raz').css("visibility","hidden")
        $('#raz').toggle()


        $('#check').addClass("roast")
        $('#chick').click(function(){
            $('#raz').css("visibility","visible")

            $('#raz').toggle()
            $('#check').click(function(){
                $('#check').removeClass("roast")
                $('#tyre').hide()
            })
            
        })
        

        
        $('#deletex').click(function(){
            $('#tyre').fadeOut()
        })
        
    })
    $('#raz').click(function(){
            if(rt==0){
                $('#chick').trigger('play')
                $('#raz').toggle()
                rt =1
            }
            else{
                $('#chick').trigger('pause')
                $('#raz').toggle()
                rt =0
            }
        })



    

    // the special ONE
    

    function sam(){
        setTimeout(
            function(){
                $('#wordp').html(custom).animate({width: 'toggle'},1500);
                $('#wordp').html(custom).animate({width: 'toggle'},1500);
                setTimeout(
                    function(){
                        $('#wordp').html(business).animate({width: 'toggle'},1500);
                        $('#wordp').html(business).animate({width: 'toggle'},1500);
                        setTimeout(
                            function(){
                                $('#wordp').html(creative).animate({width: 'toggle'},2000);
                                $('#wordp').html(creative).animate({width: 'toggle'},2000);
                                setTimeout(
                                    function(){
                                        sam()
                        
                                    }
                                    ,3200)
                
                            }
                            ,3000)
        
                    }
                    ,3000)

            }
            ,1000)
    }  
    sam()
        



    
    

    $(window).scroll(function(){
        if($(document).scrollTop()>50){
            $('#nice').removeClass()
            $('#nice').addClass("addtonice")
            $('#ska').css("margin-left","-5%")
            $('#nice').css("background-color","white")
            $('#red').css("background-color","white")
            $('#red').css("color","black")
            $('#rose').css("color","black")
            $('#soap').css("color","black")
            $('#nice').css("color","black")
            

        }
        else{
            $('#nice').addClass("container")
            $('#nice').removeClass("addtonice")
            // $('#nice').addClass("navbar")

            $('#red').css("background-color","#21262c")
            $('#chi').css("margin-left","35%")
            $('#nice').addClass("nice")


        }
    })

    // function check(){
    //     var checkinterval= setInterval(
    //         function(){
    //             var sark =$('#keg')
    //             var dd =$('#dd')
                
    //             dd.mouseout(function(){
    //                 ddlove =1
    //             })
    //             sark.mouseout(function(){
    //                 sarklove =1
    //             })
    //             if((ddlove==0)&&(sarklove==0)){
    //                 $('#dd').hide()
    //                 $('#carryup').show()
    //             }
    //             else{
    //                 $('#dd').show()
    //                 $('#carryup').hide()
    //                 // clearInterval(checkinterval)
    //             }
    //         }
    //         ,400)
    // }

    $('#navbarDropdown').mouseover(function(){
        $('#dd').show()
        $('#carryup').hide()
        // check()

    })
    $('#navbarDropdown').mouseout(function(){
        $('#dd').mouseover(function(){
            $('#dd').show()
            $('#carryup').hide()
            var img= $('#keg')

            var pics =document.getElementsByClassName('river')
            for(i=0,len=pics.length;i<len;i++)
            (function(i){
                pics[i].addEventListener('mouse',function(){
                   var use =pics[i]
                   use.animate({marginTop: '-9px'})
                    use.mouseout(function(){
                        use.animate({marginTop: '3px'})
        
                    })
                })
            })(i)
            
        })
        $('#dd').mouseout(function(){
            $('#dd').hide()
            $('#carryup').show()
            $('#row-arrow').show()
        })
        
        
        // check()
    })
    



    





    
    
})






