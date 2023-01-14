function verificar(){
    const x = document.querySelector('#inputsenha');
    const i = x.value;
    if(i == 4351 ){
        document.getElementById('section').style.display = 'flex';
        document.getElementById('verifica-senha').style.display = 'none';
    }else{
        alert('SENHA INCORRETA');
    }
}