//Animacija
$("#naslov").fadeOut(500);
$("#naslov").fadeIn(500);

$(".gallery-item").hover(function(){
    $(this).fadeOut(1000);
    $(this).fadeIn(1000);
})
$("img").click(
    function(e){
        if(e.target.classList.contains("gallery-item")){
            
            const adresa = e.target.getAttribute("src");
            document.querySelector(".modal-img").src = adresa;    
            const modal = new bootstrap.Modal(document.getElementById("gallery-modal"));
            modal.show();
            
        }
    }
)

//Validacija
/*
$("#ime").change(
    function(e){
        var unos = document.getElementById("ime");

        if(!null){
            unos.classList.add("verGreen");
        }
        else

            unos.classList.add("verRed");
            
    }
)
*/

//Moja verzija validacije
/*
$("#submit").click(
    function(){
        
        var duzinaLoz1 = false;
        var duzinaLoz2  = false;
        
        
        
        
        
        
        
        if($("#ime").val().length){
            $("#ime").addClass("verGreen");
            $("#ime").removeClass("verRed");
            
        }
        if($("#ime").val().length==0){
            $("#ime").addClass("verRed");
            $("#ime").removeClass("verGreen");

        }
           

        //prezime
        if($("#prezime").val().length){
            $("#prezime").addClass("verGreen");
            $("#prezime").removeClass("verRed");
        }
        if($("#prezime").val().length==0){
            $("#prezime").addClass("verRed");
            $("#prezime").removeClass("verGreen");

        }
        //mejl
        if($("#e-mail").val().length && $("#e-mejl:contains('@gmail.com')")){
            alert("true")
            $("#e-mail").addClass("verGreen");
            $("#e-mail").removeClass("verRed");
        }
        if($("#e-mail").val().length==0){
            $("#e-mail").addClass("verRed");
            $("#e-mail").removeClass("verGreen");
            alert("false")

        }
        
        //lozinka1
        if($("#lozinka1").val().length<4){
            $(".unos1").addClass("errorValDuzina");
            
        }
        else
            $(".unos1").removeClass("errorValDuzina");
            duzinaLoz1 = true;
        //lozinka2
        if($("#lozinka2").val().length<5){
            $(".unos2").addClass("errorValDuzina");
            
        }
        else
            $(".unos2").removeClass("errorValDuzina");
            duzinaLoz2 = true;
        //provera lozinke

        if(duzinaLoz1 == true && duzinaLoz2 == true){
            if($("#lozinka1").val() == $("#lozinka2").val()){
                $("[class *= 'unos']").removeClass("errorVal");
                $("[class *= 'unos']").addClass("passVal");
            }
            else{
                $("[class *= 'unos']").removeClass("passVal");
                $("[class *= 'unos']").addClass("errorVal");
            }
        }
        
       
        
    }
   
    
)
*/ 
    
//Bolja verzija validacije :)
$(function(){
    
    var val_ime = false;
    var val_prezime = false;
    var val_lozinka1 = false;
    var val_lozinka2 = false;
    var val_email= false;

    $("#greska_ime").hide().css("color","red");
    $("#greska_prezime").hide().css("color","red");
    $("#greska_lozinka1").hide().css("color","red");
    $("#greska_lozinka2").hide().css("color","red");
    $("#greska_email").hide().css("color","red");
    $("#greska_validacija").hide().css("color","red");

    $("#ime").focusout(function(){
        provera_imena();
    })

    $("#prezime").focusout(function(){
        provera_prezime();
    })

    $("#lozinka1").focusout(function(){
        provera_lozinka1();
    })

    $("#lozinka2").focusout(function(){
        provera_lozinka2();
    })

    $("#e-mail").focusout(function(){
        provera_email();
    })
   
    function provera_imena(){
        var patern = /^[a-zA-Z]*$/;
        var ime = $("#ime").val();
        if(patern.test(ime) && ime !== ''){
            
            $("#greska_ime").hide();
            $("#ime").css("border","5px solid #22ff00");
            val_ime = true;
            
        }
        else{
            $("#greska_ime").html("Ime moze da sadrzi samo slova");
            $("#greska_ime").show();
            $("#ime").css("border","5px solid #ff0000");
            

        }
    }
    function provera_prezime(){
        var patern = /^[a-zA-Z]*$/;
        var prezime = $("#prezime").val();
        if(patern.test(prezime) && prezime !== ''){
            
            $("#greska_prezime").hide();
            $("#prezime").css("border","5px solid #22ff00");
            val_prezime = true;
            
        }
        else{
            $("#greska_prezime").html("Prezime moze da sadrzi samo slova");
            $("#greska_prezime").show();
            $("#prezime").css("border","5px solid #ff0000");
            

        }
        




    }
    function provera_lozinka1(){
        
        duzina = $("#lozinka1").val().length;
        
        if(duzina >=8){
            
            $("#greska_lozinka1").hide();
            
            $("#lozinka1").css("border","5px solid #22ff00");
            
            val_lozinka1 = true;
           
        }
        else{
            $("#greska_lozinka1").html("Lozinka mora da sadrzi barem 8 karaktera");
            $("#greska_lozinka1").show();
            $("#lozinka1").css("border","5px solid #ff0000");
            

        }
        
       
    }
    function provera_lozinka2(){
        
        var lozinka1 = $("#lozinka1").val();
        var lozinka2 = $("#lozinka2").val();
        
        if(lozinka1 !=lozinka2 || !lozinka2){
            $("#greska_lozinka2").html("Lozinke nisu iste");
            $("#greska_lozinka2").show();
            $("#lozinka2").css("border","5px solid #ff0000");
            
            
            
        }
        else{
            $("#greska_lozinka2").hide();
            $("#lozinka2").css("border","5px solid #22ff00");
            val_lozinka2 = true;

        }
        
       
    }
    function provera_email(){
        var patern = /^([\w-\.]+@([\w-]+\.)+[\w-]{3})?$/;
        var email = $("#e-mail").val();
        if(patern.test(email) && email!== ''){
            
            $("#greska_email").hide();
            $("#e-mail").css("border","5px solid #22ff00");
            val_email = true;
            
        }
        else{
            $("#greska_email").html("Neispravan format ");
            $("#greska_email").show();
            $("#e-mail").css("border","5px solid #ff0000");
            

        }
    }
    //Validacija forme


    $("#submit").click(function(){
        val_ime = false;
        val_prezime = false;
        val_lozinka1 = false;
        val_lozinka2 = false;
        val_email= false;

        provera_email();
        provera_imena();
        provera_prezime();
        provera_lozinka1();
        provera_lozinka2();
       
        var uspesno = "alert alert-success";
        var neuspesno = "alert alert-danger";
        if(val_ime===true && val_prezime===true && val_email===true && val_lozinka1===true && val_lozinka2===true){
            console.log(val_lozinka2+"uspesno");
            $("#uspesno").removeClass(neuspesno);
            $("#uspesno").addClass(uspesno).html("Uspesno");
            return true;
        }
        else{
            
            console.log(val_lozinka2+"neuspesno");
            $("#uspesno").removeClass(uspesno);
            $("#uspesno").addClass(neuspesno).html("Neuspesno");
            return false;
            
            
    
        }
    })





})



        
    

