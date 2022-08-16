const verifyInput = (value1, value2) => {
    if (!value1 || !value2) {
      throw new Error('Preencha os campos para realizar a soma');
    }
  }

function sum() {
    try {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value; 
    verifyInput(value1, value2) 
        const result = Number(value1) + Number(value2);
        document.getElementById("result").innerHTML = `Resultado: ${result}`;
    } catch (error) {
        document.getElementById("result").innerText = error.message;
    } finally {
        document.getElementById('value1').value = ''; 
        document.getElementById('value2').value = '';
    }
}
window.onload = () => {
    const button = document.getElementById("button");
    button.addEventListener("click", sum);
};

