const botao = document.getElementById('calcular');

function imc () {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== ''){
    calc = (peso/(altura**2));
    
    if (calc < 16){
      resultado.textContent = `${nome} Seu IMC é ${calc.toFixed(1)}\nIndica MAGREZA GRAVE.`;
    }
    else if (calc >= 16 && calc <= 16.9){
      resultado.textContent = `${nome} Seu IMC é ${calc.toFixed(1)}\nIndica MAGREZA MODERADA.`;
    }
    else if (calc >= 17 && calc <= 18.5){
      resultado.textContent = `${nome} Seu IMC é ${calc.toFixed(1)}\nIndica MAGREZA LEVE.`;
    }
    else if (calc >= 18.6 && calc <= 24.9){
      resultado.textContent = `${nome} Seu IMC é ${calc.toFixed(1)}\nIndica PESO IDEAL.`;
    }
    else if (calc >= 25 && calc <= 29.9){
      resultado.textContent = `${nome} Seu IMC é ${calc.toFixed(1)}\nIndica SOBREPESO.`;
    }
    else if (calc >= 30 && calc <= 34.9){
      resultado.textContent = `${nome} Seu IMC é ${calc.toFixed(1)}\nIndica OBESIDADE GRAU I.`;
    }
    else if (calc >= 35 && calc <= 39.9){
      resultado.textContent = `${nome} Seu IMC é ${calc.toFixed(1)}\nIndica OBESIDADE GRAU II OU SEVERA.`;
    }
    else if (calc >= 40){
      resultado.textContent = `${nome} Seu IMC é ${calc.toFixed(1)}\nIndica OBESIDADE GRAU III OU MÓRBIDA.`;
    }
  }else {
    resultado.textContent = 'Preencha TODOS os CAMPOS!';
  };
};

botao.addEventListener('click', imc);
