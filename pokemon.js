// first path set variables
var turno = 0;
var fim_de_turno = false;
var vidap1 = 100;
var vidap2 = 100;
var ataquep1 = 1;
var ataquep2 = 1;
var defesap1 = 1;
var defesap2 = 1;
function fogo() {// this function execute attack fire ball
    if (turno % 2 == 0 && fim_de_turno == false)// this if check if turn is the player one {
        var normal = document.getElementById('campo').innerHTML;
        fim_de_turno = true;
        // some image of fire ball
        document.getElementById('campo').innerHTML+="<img src='fire-ball-vector-2106209-removebg-preview.png' class='fogo' id='fogo;
        setTimeout(() => {//animation of damage and delete fire ball after two hundred mili seconds
            document.getElementById('campo').innerHTML = normal;
            document.getElementById('lucario').style.filter = "brightness(0) saturate(100%) invert(15%) sepia(64%) saturate(5093%) hue-rotate(354deg) brightness(88%) contrast(110%)";
            document.getElementById('lucario').style.animationName = 'dano';
            document.getElementById('lucario').style.animationDuration = '300ms';
        }, 200)
        setTimeout(() => {// finaly turn of player one
            document.getElementById('campo').innerHTML = normal;
            turno++;
            fim_de_turno = false;
            animacao_da_vida_1(10 * ataquep1 / defesap2, vidap2);//animation of damage in the bar of life
            vidap2 -= 10 * ataquep1 / defesap2;// some 0.25 points of damage for player one
            ataquep1 += 0.25;
        }, 800)
    }
}
function sombra() {// this function execute attack shadow  ball
    if (turno % 2 == 1 && fim_de_turno == false) {// this if check if it´s player two's turn
        var normal = document.getElementById('campo').innerHTML;
        fim_de_turno = true;
        document.getElementById('campo').innerHTML += '<img src="a687a60f-05bf-4227-a868-37bba6806ef9.png" class="sombra">';//set image of fire ball in the div for id campo
        setTimeout(() => {// set animation of damage in the player one
            document.getElementById('campo').innerHTML = normal;
            document.getElementById('charizard').style.filter = "brightness(0) saturate(100%) invert(15%) sepia(64%) saturate(5093%) hue-rotate(354deg) brightness(88%) contrast(110%)";
            document.getElementById('charizard').style.animationName = 'dano_charizard';
            document.getElementById('charizard').style.animationDuration = '300ms';
            animacao_da_vida_2(10 * ataquep2 / defesap1, vidap1);//set animation of damage in the bar of life
            vidap1 -= 10 * ataquep2 / defesap1; //give damage
            ataquep2 += 0.25;//some 0.25 points of damage to player two
        }, 200)
        setTimeout(() => {//finaly turn
            document.getElementById('campo').innerHTML = normal;
            turno++;
            fim_de_turno = false;
        }, 800)
    }
}

function soco() { //this function execute attack fire punch
    if (turno % 2 == 0 && fim_de_turno == false) {// this if check if is turn of player two 
        fim_de_turno = true;
        var css_lucario = document.getElementById('lucario').style;
        var normal = document.getElementById("charizard").style;
        document.getElementById('charizard').style.marginRight = '550px';// trade the float for margin right
        document.getElementById('charizard').style.float = 'none';
        document.getElementById('charizard').style.animationDuration = "2s";//set time of punch animation
        document.getElementById('charizard').style.animationName = "ataque_fisico_charizard";//set animation of punch
        setTimeout(() => {
            document.getElementById('lucario').style.filter = "brightness(0) saturate(100%) invert(15%) sepia(64%) saturate(5093%) hue-rotate(354deg) brightness(88%) contrast(110%)";// set filter of demage in lucrio
            document.getElementById('lucario').style.animationName = 'dano';
            document.getElementById('lucario').style.animationDuration = '300ms';
            animacao_da_vida_1(20 * ataquep1 / defesap2, vidap2);// execute the animation damage in the bar life
            vidap2 -= 20 * ataquep1 / defesap2;//set damege
        }, 1000)
        setTimeout(() => {//return css of lucario of normal
            document.getElementById('lucario').style = css_lucario;
        },1300)
        setTimeout(() => {// finaly turn
            document.getElementById('charizard').style = normal;
            turno++;
            fim_de_turno = false;
        },2000)
    }
}
function fisico_lucario(){// this function set animation of attack punch
    if (turno % 2 == 1 && fim_de_turno == false) { // this if check if is turn of lucario
        fim_de_turno = true;
        var css_lucario = document.getElementById('lucario').style;// this variable guard the css of lucario
        var normal = document.getElementById("charizard").style; // this variable guard the css of charizard
        document.getElementById('lucario').style.marginLeft = '550px'; //set margin left of 550 pixels
        document.getElementById('lucario').style.float = 'none'; //remove the atribute float from css
        document.getElementById('lucario').style.animationDuration = "2s";//set time of animation
        document.getElementById('lucario').style.animationName = "ataque_fisico_lucario";//set animation
        setTimeout(() => {// set animation to damage 
            document.getElementById('charizard').style.filter = "brightness(0) saturate(100%) invert(15%) sepia(64%) saturate(5093%) hue-rotate(354deg) brightness(88%) contrast(110%)";//set filter of demage of damage in CSS 
            document.getElementById('charizard').style.animationName = 'dano_charizard';//set animation of damage in charizard
            document.getElementById('charizard').style.animationDuration = '300ms';//set time of animatiom
            animacao_da_vida_2(20 * ataquep2 / defesap1, vidap1)//set animation of damage in the bar of life
            vidap1 -= 20 * ataquep2 / defesap1;//set damage
        }, 1000)
        setTimeout(() => { 
            document.getElementById('charizard').style = normal;//remove filter and damage animation from charizard
        }, 1300)
        setTimeout(() => {
            document.getElementById('lucario').style = css_lucario;// remove margin,return to float, and remove animation name and time
            turno++; fim_de_turno = false;//finish turn
        }, 2000)
    }
}
function animacao_da_vida_1(dano, vida) {
    var larguraAtual = vida;  // Supondo que a largura seja diretamente proporcional � vida
    var interval = setInterval(() => {//set time of animation to 500/60
        larguraAtual -= 1/6;//set animation in the computer
        if (larguraAtual <= (vida - dano)) {//set end of animation
            larguraAtual = (vida - dano);
            clearInterval(interval);
        }

        document.getElementById('vidap2').style.width = String(larguraAtual) + '%';//set width animation in the vision of player
    }, 500 / 60);
    document.getElementById("visorp2").innerText=String(vida-dano)+"/100";
    setTimeout(() => {
        if (vida-dano<=0){//set vision of victory
            var normal=document.getElementById('vidap1').innerHTML;//guard the html of vidap1 in the variable
            document.getElementById('vidap1').innerHTML+='<br><h6 class="visor col-sm-1 h6" id="visorp2">charizard ganhou</h6>';//set text for victory
            vidap2=100;//set vida p2 to normal
            vidap1 = 100;//set vida p1 to normal
            defesap1 = 1;//set defense p1 to normal
            defesap2 = 1;//set defense p2 to normal
            ataquep1 = 1; //set attack p1 to normal
            ataquep2 = 1;//set attack p2 to normal
            document.getElementById('vidap2').style.width = '100%'; //return width of life bar for player two to normal
            document.getElementById('vidap1').style.width = '100%'; //return width of life bar for player one to normal
            document.getElementById("lucario").style.height = '0px'; //delete lucario visually for 1 second
            setTimeout(() => {
                document.getElementById("lucario").style.height = '';//return lucario to normal
            },1000);
        }
    },60*dano);
}
function animacao_da_vida_2(dano, vida) {
    var larguraAtual = vida;  // Supondo que a largura seja diretamente proporcional a vida
        var interval = setInterval(() => {// set interval of animatio for life bar
            larguraAtual -= 1/6;//set the animation to computer
            if (larguraAtual <= (vida - dano)) {// set the condion of end the animation
                larguraAtual = (vida - dano);
                clearInterval(interval);
            }

            document.getElementById('vidap1').style.width = String(larguraAtual) + '%';// return width vidap1 to normal
        }, 500 / 60);
	document.getElementById("visorp1").innerText=String(vida-dano)+"/100";
    setTimeout(() => {// time of check to victory
        if (vida-dano<=0){
            var normal=document.getElementById('vidap2').innerHTML;//guard html for the vidap2
            document.getElementById('vidap2').innerHTML += '<br><h6 class="visor col-sm-1 h6" id="visorp2">lucario ganhou</h6>';//add the text of victory in the vidap2
            //return to normal the css and inform necessary
            vidap2 = 100;
            vidap1 = 100;
            defesap2 = 1;
            defesap1 = 1;
            ataquep1 = 1;
            ataquep2 = 1;
            document.getElementById('vidap2').style.width ='600px';
            document.getElementById('vidap1').style.width = '600px';
            document.getElementById('charizard').style.height = '0px';
            setTimeout(() => {
                document.getElementById('vidap2').innerHTML = normal;
                document.getElementById('charizard').style.height = '360px';
            },1000);
            }
    },60*dano);
}
function ataque_up_p1() { //multiply ataque_p1 by 1.5 in compound interest
    ataquep1 *= 1.5;
}
function ataque_up_p2() {//multiply ataque_p2 by 1.5 in compound interest
    ataquep2 *= 1.5;
}
function defesa_up_p1() {//multiply defesa_p1 by 1.5 in compound interest
    defesap1 *= 1.5;
}
function defesa_up_p2() {//multiply ataque_p2 by 1.5 in compound interest
    defesap2 *= 1.5;
}