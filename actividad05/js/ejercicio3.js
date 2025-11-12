function ejercicio3() {
  // Lista de empleados
  let empleados = [
    {
      ci: "12345",
      nombre: "Carlos Pérez",
      puesto: "Desarrollador",
      salario: 8000,
      departamento: "Tecnología"
    },
    {
      ci: "54321",
      nombre: "Ana Torres",
      puesto: "Diseñadora",
      salario: 6500,
      departamento: "Marketing"
    }
  ];

  // Función para mostrar todos los empleados
  function verEmpleados() {
    if (empleados.length === 0) {
      alert("📋 No hay empleados registrados.");
      return;
    }

    let texto = "👥 Lista de empleados:\n\n";
    for (let emp of empleados) {
      texto +=
        "CI: " + emp.ci + "\n" +
        "Nombre: " + emp.nombre + "\n" +
        "Puesto: " + emp.puesto + "\n" +
        "Salario: $" + emp.salario + "\n" +
        "Departamento: " + emp.departamento + "\n\n";
    }
    alert(texto);
  }

  // Función para agregar un nuevo empleado
  function agregarEmpleado() {
    let ci = prompt("🆔 Ingresa el CI (5 dígitos):");
    if (!/^\d{5}$/.test(ci)) {
      alert("⚠️ CI inválido. Debe tener 5 dígitos.");
      return;
    }

    if (empleados.find(e => e.ci === ci)) {
      alert("⚠️ Ya existe un empleado con ese CI.");
      return;
    }

    let nombre = prompt("👤 Nombre completo:");
    let puesto = prompt("💼 Puesto:");
    let salario = parseFloat(prompt("💰 Salario:"));
    let departamento = prompt("🏢 Departamento:");

    if (nombre && puesto && !isNaN(salario) && departamento) {
      empleados.push({ ci, nombre, puesto, salario, departamento });
      alert("✅ Empleado agregado correctamente.");
    } else {
      alert("⚠️ Datos incompletos. No se agregó el empleado.");
    }
  }

  // Función para eliminar empleado por CI
  function eliminarEmpleado() {
    let ci = prompt("🆔 Ingresa el CI del empleado a eliminar:");
    let index = empleados.findIndex(e => e.ci === ci);

    if (index === -1) {
      alert("❌ Empleado no encontrado.");
      return;
    }

    let emp = empleados[index];
    let confirmacion = prompt(
      "Empleado encontrado:\n\n" +
      "Nombre: " + emp.nombre + "\n" +
      "Puesto: " + emp.puesto + "\n" +
      "Departamento: " + emp.departamento + "\n\n" +
      "¿Eliminar empleado?\nEscribe '1' para eliminar o '2' para cancelar:"
    );

    if (confirmacion === "1") {
      empleados.splice(index, 1);
      alert("✅ Empleado eliminado.");
    } else {
      alert("❎ Eliminación cancelada.");
    }
  }

  // Función para modificar empleado por CI
  function modificarEmpleado() {
    let ci = prompt("🆔 Ingresa el CI del empleado a modificar:");
    let emp = empleados.find(e => e.ci === ci);

    if (!emp) {
      alert("❌ Empleado no encontrado.");
      return;
    }

    let campo = prompt(
      "Empleado encontrado: " + emp.nombre + "\n\n" +
      "¿Qué deseas modificar?\n" +
      "1. Puesto\n" +
      "2. Salario\n" +
      "3. Departamento\n" +
      "4. Cancelar"
    );

    switch (campo) {
      case "1":
        let nuevoPuesto = prompt("💼 Puesto actual: " + emp.puesto + "\nNuevo puesto:");
        if (nuevoPuesto) {
          emp.puesto = nuevoPuesto;
          alert("✅ Puesto actualizado.");
        }
        break;
      case "2":
        let nuevoSalario = parseFloat(prompt("💰 Salario actual: $" + emp.salario + "\nNuevo salario:"));
        if (!isNaN(nuevoSalario)) {
          emp.salario = nuevoSalario;
          alert("✅ Salario actualizado.");
        }
        break;
      case "3":
        let nuevoDept = prompt("🏢 Departamento actual: " + emp.departamento + "\nNuevo departamento:");
        if (nuevoDept) {
          emp.departamento = nuevoDept;
          alert("✅ Departamento actualizado.");
        }
        break;
      case "4":
        alert("❎ Modificación cancelada.");
        break;
      default:
        alert("⚠️ Opción inválida.");
    }
  }

  // Menú interactivo principal
  let opcion;
  do {
    opcion = prompt(
      "👨‍💼 Sistema de Empleados\n\n" +
      "1. Ver empleados\n" +
      "2. Agregar empleado\n" +
      "3. Eliminar empleado\n" +
      "4. Modificar empleado\n" +
      "5. Salir\n\n" +
      "Selecciona una opción:"
    );

    switch (opcion) {
      case "1":
        verEmpleados();
        break;
      case "2":
        agregarEmpleado();
        break;
      case "3":
        eliminarEmpleado();
        break;
      case "4":
        modificarEmpleado();
        break;
      case "5":
        alert("👋 Saliendo del sistema de empleados.");
        break;
      default:
        alert("⚠️ Opción inválida.");
    }
  } while (opcion !== "5");
}
