<?php
    session_start();

    $img_src = "";
    $msg = "";
    $img_type = "";

    $error1 = "Triângulo impossível";
    $lado1 = filter_var(($_POST["lado1"] ?? ""), FILTER_SANITIZE_NUMBER_INT);
    $lado2 = filter_var(($_POST["lado2"] ?? ""), FILTER_SANITIZE_NUMBER_INT);
    $lado3 = filter_var(($_POST["lado3"] ?? ""), FILTER_SANITIZE_NUMBER_INT);

    function triangulo($tri1, $tri2, $tri3){
        global $msg, $img_src, $img_type;

        if(($tri1 + $tri2) < $tri3 || ($tri1 + $tri3) < $tri2 || ($tri2 + $tri3) < $tri1){
            $msg = "Triângulo impossível.";
        }
        else {
            switch(true){
                case($tri1 == $tri2 && $tri2 == $tri3 && $tri1 == $tri3):
                    $msg = "Triângulo Equilátero";
                    $img_type = "Possui três lados iguais.";
                    $img_src = "img/img_tri1.jpg"; break;
                
                case($tri1 != $tri2 && $tri2 != $tri3 && $tri1 != $tri3):
                    $msg = "Triângulo Escaleno";
                    $img_type = "Possui três lados diferentes.";
                    $img_src = "img/img_tri3.jpg"; break;

                default:
                    $msg = "Triângulo Isosceles";
                    $img_type = "Possui dois lados iguais e um diferente.";
                    $img_src = "img/img_tri2.jpg";
            }
        }
    }

    if(!($lado1 == "")){
        triangulo($lado1, $lado2, $lado3);
        // $_SESSION['msg'] = $msg;
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA_Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Programação Web - Atividade JS</title>
        <link rel="stylesheet" href="./css/estilos.css" />
        <script src="./js/script.js" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Atividades para Avaliação JS</h1>
        </header>
        <p id="atv">Atividade 01:</p>
        <div id="atv_container">
            <p id="data_hoje"></p>
            <p id="data_ferias"></p>
            <p id="data_niver"></p>
        </div>
        <hr />
        <p id="atv">Atividade 02:</p>
        <div id="atv_container">
            <p>Calculadora IMC</p>
            <div id="form">
                <div class="form_cont">
                    <label for="peso">Peso: </label>
                    <input id="peso" type="number" name="peso" inputmode="numeric" placeholder="Peso" required="required" min="1" autofocus>
                </div>
                <div class="form_cont">
                    <label for="altura">Altura: </label>
                    <input id="altura" type="number" name="altura" inputmode="numeric" placeholder="Altura (em cm)" required="required" min="10">
                </div>
                <button href="#" id="button1" type="submit">Calcular IMC</button>
            </div>
            <textarea id="imc_box" name="imc" inputmode="numeric" placeholder="Seu IMC é..." readonly></textarea>
        </div>
        <hr />
        <p id="atv">Atividade 03:</p>
        <div id="atv_container">
            <p>Média Aritmética</p>
            <div id="form">
                <div class="form_out">
                    <div class="form_cont">
                        <label for="nota1" class="label">Nota 1: </label>
                        <input id="nota1" type="number" name="nota1" inputmode="numeric" pattern="[0-9]*" placeholder="Nota 1" required="required" min="0" max="10">
                    </div>
                    <p id="error_input3"></p>
                    <div class="form_cont">
                        <label for="nota2" class="label">Nota 2: </label>
                        <input id="nota2" type="number" name="nota2" inputmode="numeric" pattern="[0-9]*" placeholder="Nota 2" required="required" min="0" max="10">
                    </div>
                    <p id="error_input4"></p>
                </div>
                <div class="form_out">
                    <button href="#" id="button2" type="submit">Calcular Média</button>
                    <textarea id="media_box" name="media" inputmode="numeric" placeholder="Sua média é..." readonly></textarea>
                </div>
            </div>
        </div>
        <hr />
        <p id="atv">Atividade 04:</p>
        <div id="atv_container">
            <p>Lista VIP</p>
            <div class="form">
                <div class="form_cont">
                    <label for="lista" class="label">Nomes: utilize (,) virgula entre os nomes</label>
                    <input type="text" name="lista" id="listaVIP" placeholder="Alice, Eduardo, Carlos..." required="required">
                    <p id="error_input5"></p>
                </div>
                <div class="form_center">
                    <button href="#" id="button4" type="submit">Limpar tudo</button> 
                    <button href="#" id="button5" type="submit">Limpar último</button> 
                    <button href="#" id="button3" type="submit">Inserir</button>        
                </div>
                <div class="form_cont">
                    <ul id="pLista"></ul>
                </div>
            </div>
        </div>
        <hr />
        <p id="atv">Atividade 05:</p>
        <div id="atv_container">
            <p>Que dia é hoje?</p>
            <div class="form">
                <div class="form_center">
                    <p id="hoje_print"></p>
                </div>
            </div>
        </div>
        <hr />
        <p id="atv">Atividade 06:</p>
        <div id="atv_container">
            <p>Jogo - Tente adivinhar o número (1 a 10) em 3 tentativas!</p>
            <div class="form">
                <div class="form_out">
                    <div class="form_out">
                        <p id="resultado"></p> 
                        <p id="vidas"></p>
                    </div>
                    <div class="form_center">
                        <input type="text" name="rand_number" id="rand_number" placeholder="NUMERO SECRETO" readonly>
                    </div>
                    <div class="form_center">
                        <input type="number" id="number_input" placeholder="Sua tentativa" min="1" max="10">
                    </div>
                    <div class="form_center">
                        <button href="#" id="button6" type="button">Tentativa</button>
                        <button href="#" id="button7" type="button">Novo Jogo</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <p id="atv">Atividade 07:</p>
        <div id="atv_container">
            <p>Select</p>
            <div class="form">
                <select name="sites" id="sites">
                    <option value="">==  Sites  ==</option>
                    <option value="https://www.google.com/">Google</option>
                    <option value="https://www.pinterest.com/">Pinterest</option>
                    <option value="https://www.chatgpt.com/">ChatGPT</option>
                    <option value="https://www.flaticon.com/">FlatIcon</option>
                </select>
            </div>
        </div>
        <hr />
        <p id="atv">Atividade 08:</p>
        <div id="atv_container">
            <p>Relógio Digital</p>
            <div class="form">
                <p id="relogio"></p>
            </div>
        </div>
        <hr />
        <p id="atv">Atividade 09:</p>
        <div id="atv_container">
            <p>Coração</p>
            <div class="form">
                <div id="sun_div">
                    <img id="sun" src="img/sun.png" width="200"/>
                </div>
            </div>
        </div>
        <hr />
        <p id="atv">Atividade 10:</p>
        <div id="atv_container">
            <p>Temporizador:</p>
            <div class="form">
                <div id="fotos">
                    <p id="slide"></p>
                </div>
            </div>
        </div>
        <hr />
        <p id="atv">Atividade PHP:</p>
        <div id="atv_container">
            <p>Triângulo:</p>
            <div class="form">
                <div class="form_center">
                    <div class="form_cont">
                        <form id="triangulo" name="triangulo" method="post" action="#triangulo">
                            <div class="form_cont">
                                <label for="lado1" class="label">Lado 1: </label>
                                <input id="lado1" type="number" name="lado1" inputmode="numeric" pattern="[0-9]*" placeholder="Lado 1" required="required" min="1">
                            </div>
                            <div class="form_cont">
                                <label for="lado2" class="label">Lado 2: </label>
                                <input id="lado2" type="number" name="lado2" inputmode="numeric" pattern="[0-9]*" placeholder="Lado 2" required="required" min="1">
                            </div>
                            <div class="form_cont">
                                <label for="lado3" class="label">Lado 3: </label>
                                <input id="lado3" type="number"name="lado3" inputmode="numeric" pattern="[0-9]*" placeholder="Lado 2" required="required" min="1">
                            </div>
                            <input type="submit" id="button8" value="Verificar">
                        </form>
                    </div>
                    <div class="form_out">
                            <!-- <?php if (!empty($_SESSION['msg'])): ?>
                                <p><?php echo $_SESSION['msg']; ?></p>
                            <?php endif; ?> -->
                            <p id="tri_msg"><?= $msg ?></p>
                            <?php if (!empty($img_src)): ?>
                                <img src="<?php echo $img_src; ?>" alt="Triângulo" id="img_tri">
                            <?php endif; ?>
                            <p id="tri_msg"><?= $img_type ?></p>
                            <?php
                                unset($_SESSION['msg']);
                            ?>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>