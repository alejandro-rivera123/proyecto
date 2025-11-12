function ejercicio1() {
  // Constructor del objeto Libro
  function Libro(titulo, autor, año, disponible = true) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.disponible = disponible;

    // Método para mostrar información detallada del libro
    this.info = function () {
      return (
        "Título: " + this.titulo + "\n" +
        "Autor: " + this.autor + "\n" +
        "Año: " + this.año + "\n" +
        "Disponible: " + (this.disponible ? "Sí" : "No")
      );
    };

    // Método para prestar el libro
    this.prestar = function () {
      if (this.disponible) {
        this.disponible = false;
        alert(" Libro '" + this.titulo + "' ha sido prestado.");
      } else {
        alert(" El libro '" + this.titulo + "' ya está prestado.");
      }
    };

    // Método para devolver el libro
    this.devolver = function () {
      this.disponible = true;
      alert(" Libro '" + this.titulo + "' ha sido devuelto.");
    };
  }

  // Lista de libros inicial
  let biblioteca = [
    new Libro("1984", "George Orwell", 1949),
    new Libro("Cien años de soledad", "Gabriel García Márquez", 1967),
    new Libro("El Principito", "Antoine de Saint-Exupéry", 1943)
  ];

  // Función para mostrar todos los libros
  function verLibros() {
    if (biblioteca.length === 0) {
      alert(" No hay libros en la biblioteca.");
      return;
    }

    let mensaje = " Biblioteca:\n\n";
    for (let libro of biblioteca) {
      mensaje += libro.info() + "\n\n";
    }
    alert(mensaje);
  }

  // Función para agregar un nuevo libro
  function agregarLibro() {
    let titulo = prompt(" Ingresa el título del libro:");
    let autor = prompt(" Ingresa el autor:");
    let año = prompt(" Ingresa el año de publicación:");

    if (titulo && autor && año) {
      biblioteca.push(new Libro(titulo.trim(), autor.trim(), parseInt(año)));
      alert(" Libro agregado correctamente.");
    } else {
      alert(" Datos incompletos. No se agregó el libro.");
    }
  }

  // Función para prestar un libro por título
  function prestarLibro() {
    let titulo = prompt(" Ingresa el título del libro a prestar:");
    let libro = biblioteca.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());

    if (libro) {
      libro.prestar();
    } else {
      alert(" Libro no encontrado.");
    }
  }

  // Función para devolver un libro por título
  function devolverLibro() {
    let titulo = prompt(" Ingresa el título del libro a devolver:");
    let libro = biblioteca.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());

    if (libro) {
      libro.devolver();
    } else {
      alert(" Libro no encontrado.");
    }
  }

  // Menú interactivo principal
  let opcion;
  do {
    opcion = prompt(
      " Biblioteca de Libros\n\n" +
      "1. Ver libros\n" +
      "2. Agregar libro\n" +
      "3. Prestar libro\n" +
      "4. Devolver libro\n" +
      "5. Salir\n\n" +
      "Selecciona una opción:"
    );

    switch (opcion) {
      case "1":
        verLibros();
        break;
      case "2":
        agregarLibro();
        break;
      case "3":
        prestarLibro();
        break;
      case "4":
        devolverLibro();
        break;
      case "5":
        alert(" Saliendo de la biblioteca.");
        break;
      default:
        alert(" Opción inválida.");
    }
  } while (opcion !== "5");
}
