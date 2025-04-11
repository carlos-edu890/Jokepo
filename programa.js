function jogada(valor){
  let img1 = document.querySelector('.cpu');
  let img2 = document.querySelector('.user');
  let text = document.querySelector('#texto');

  let num = Math.random();

  img1.src = 'rock-paper-scissor-game-images/images/rock.png';
  img2.src = 'rock-paper-scissor-game-images/images/rock.png';

  text.innerHTML = `Wait...`
 
  rodar(3);

  function rodar(vezes){
    if (vezes > 0) {

      img1.style.transform = "rotate(45deg)";
      img1.style.transition = "transform 1s";

      img2.style.transform = "rotate3d(4,9,0, 180deg)";
      img2.style.transition = "transform 1s";

      setTimeout(() => {
        img1.style.transform = "rotate(90deg)";
        img1.style.transition = "transform 1s";

        img2.style.transform = "rotate3d(5,5,0, 180deg)";
        img2.style.transition = "transform 1s";

        // Chama a animação novamente até completar as repetições
        setTimeout(() => rodar(vezes - 1), 900);
      }, 900);
    }else {
      resultado();
    }
  }

  function resultado(){
    if(valor == 1){
    //jogou papel

      if(num >= 0 && num < 0.33){
        //pedra
        text.innerHTML = `User Won!!`;
        img1.src = 'rock-paper-scissor-game-images/images/rock.png';
        img2.src = 'rock-paper-scissor-game-images/images/paper.png';
      }else if(num >= 0.33 && num < 0.66){
        //tesoura
        text.innerHTML = `Cpu Won!!`;
        img1.src = 'rock-paper-scissor-game-images/images/scissors.png';
        img2.src = 'rock-paper-scissor-game-images/images/paper.png';
      }else{
        //papel
        text.innerHTML = `Draw!!`;
        img1.src = 'rock-paper-scissor-game-images/images/paper.png';
        img2.src = 'rock-paper-scissor-game-images/images/paper.png';
      }

    }else if(valor == 2){
      //jogou pedra

      if(num >= 0 && num < 0.33){
        //pedra
        text.innerHTML = `Draw!!`;
        img1.src = 'rock-paper-scissor-game-images/images/rock.png';
        img2.src = 'rock-paper-scissor-game-images/images/rock.png';
      }else if(num >= 0.33 && num < 0.66){
        //tesoura
        text.innerHTML = `User Won!!`;
        img1.src = 'rock-paper-scissor-game-images/images/scissors.png';
        img2.src = 'rock-paper-scissor-game-images/images/rock.png';
      }else{
        //papel
        text.innerHTML = `Cpu Won!!`;
        img1.src = 'rock-paper-scissor-game-images/images/paper.png';
        img2.src = 'rock-paper-scissor-game-images/images/rock.png';
      }

    }else{
      //jogou tesoura

      if(num >= 0 && num < 0.33){
        //pedra
        text.innerHTML = `Cpu Won!!`;
        img1.src = 'rock-paper-scissor-game-images/images/rock.png';
        img2.src = 'rock-paper-scissor-game-images/images/scissors.png';
      }else if(num >= 0.33 && num < 0.66){
        //tesoura
        text.innerHTML = `Draw!!`;
        img1.src = 'rock-paper-scissor-game-images/images/scissors.png';
        img2.src = 'rock-paper-scissor-game-images/images/scissors.png';
      }else{
        //papel
        text.innerHTML = `User Won!!`;
        img1.src = 'rock-paper-scissor-game-images/images/paper.png';
        img2.src = 'rock-paper-scissor-game-images/images/scissors.png';
      }
    } 
  }
}