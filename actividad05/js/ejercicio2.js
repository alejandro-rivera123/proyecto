function ejercicio2() {
  // Constructor del objeto CuentaBancaria
  function CuentaBancaria(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;

    // Historial privado de operaciones
    let historial = [];

    // Método para mostrar el saldo actual
    this.verSaldo = function () {
      alert("💰 Saldo actual de " + this.titular + ": $" + this.saldo);
    };

    // Método para depositar dinero
    this.depositar = function (monto) {
      if (monto > 0) {
        this.saldo += monto;
        historial.push({
          tipo: "Depósito",
          monto: monto,
          fecha: new Date().toLocaleString()
        });
        alert("✅ Depósito exitoso. Nuevo saldo: $" + this.saldo);
      } else {
        alert("⚠️ Monto inválido.");
      }
    };

    // Método para retirar dinero
    this.retirar = function (monto) {
      if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        historial.push({
          tipo: "Retiro",
          monto: monto,
          fecha: new Date().toLocaleString()
        });
        alert("✅ Retiro exitoso. Nuevo saldo: $" + this.saldo);
      } else {
        alert("❌ Fondos insuficientes o monto inválido.");
      }
    };

    // Método para ver historial semanal tipo ticket
    this.verHistorial = function () {
      if (historial.length === 0) {
        alert("📄 No hay movimientos registrados esta semana.");
        return;
      }

      let texto = "🧾 HISTORIAL SEMANAL\n------------------------\n";
      for (let op of historial) {
        texto += `${op.tipo}: $${op.monto}\nFecha: ${op.fecha}\n\n`;
      }
      alert(texto);
    };
  }

  // Crear cuenta de ejemplo
  let cuenta = new CuentaBancaria("María García", 1000);

  // Menú interactivo principal
  let opcion;
  do {
    opcion = prompt(
      "🏦 Cuenta Bancaria\n\n" +
      "1. Ver saldo actual\n" +
      "2. Depositar dinero\n" +
      "3. Retirar dinero\n" +
      "4. Ver historial semanal\n" +
      "5. Salir\n\n" +
      "Selecciona una opción:"
    );

    switch (opcion) {
      case "1":
        cuenta.verSaldo();
        break;
      case "2":
        let deposito = parseFloat(prompt("💵 Monto a depositar:"));
        cuenta.depositar(deposito);
        break;
      case "3":
        let retiro = parseFloat(prompt("💸 Monto a retirar:"));
        cuenta.retirar(retiro);
        break;
      case "4":
        cuenta.verHistorial();
        break;
      case "5":
        alert("👋 Saliendo del sistema bancario.");
        break;
      default:
        alert("⚠️ Opción inválida.");
    }
  } while (opcion !== "5");
}
