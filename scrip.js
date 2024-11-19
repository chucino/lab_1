// Kiểm tra tam giác và tính chu vi, diện tích
document
  .getElementById("triangleForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById("sideA").value);
    const b = parseFloat(document.getElementById("sideB").value);
    const c = parseFloat(document.getElementById("sideC").value);
    const result = document.getElementById("triangleResult");

    console.log(`a: ${a}, b: ${b}, c: ${c}`); // Kiểm tra các giá trị đầu vào

    // Kiểm tra tính hợp lệ của tam giác
    if (a + b <= c || a + c <= b || b + c <= a) {
      result.textContent = "Không phải là một tam giác hợp lệ.";
      return;
    }

    // Kiểm tra các tính chất của tam giác
    let type = "Tam giác";
    if (a === b && b === c) {
      type = "Tam giác đều";
    } else if (a === b || b === c || a === c) {
      type = "Tam giác cân";
    } else if (
      Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
      Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
      Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)
    ) {
      type = "Tam giác vuông";
    }

    // Tính chu vi và diện tích
    const perimeter = a + b + c;
    const s = perimeter / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    result.textContent = `${type}. Chu vi: ${perimeter}, Diện tích: ${area.toFixed(
      2
    )}`;
  });

// Tính lũy thừa
document
  .getElementById("powerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const base = parseFloat(document.getElementById("base").value);
    const exponent = parseInt(document.getElementById("exponent").value);
    const result = document.getElementById("powerResult");

    console.log(`Base: ${base}, Exponent: ${exponent}`); // Kiểm tra các giá trị đầu vào

    const power = Math.pow(base, exponent);
    result.textContent = `Kết quả lũy thừa: ${power}`;
  });

// Tính giai thừa
document
  .getElementById("factorialForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const number = parseInt(document.getElementById("factorialNumber").value);
    const result = document.getElementById("factorialResult");

    console.log(`Factorial number: ${number}`); // Kiểm tra các giá trị đầu vào

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }

    result.textContent = `Kết quả giai thừa: ${factorial}`;
  });
